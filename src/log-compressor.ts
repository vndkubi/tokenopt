import type { CompressionResult } from "./types.js";
import { compressBuildLog, looksLikeBuildLog } from "./compressors/build-log-compressor.js";
import { compressErrorSummary, looksLikeErrorSummary } from "./compressors/error-compressor.js";
import { compressJavaTrace, looksLikeJavaTrace } from "./compressors/java-trace-compressor.js";
import { compressJsonResult, looksLikeJsonResult } from "./compressors/json-result-compressor.js";
import { compressReviewFindings, looksLikeReviewFindings } from "./compressors/review-findings.js";

const DEFAULT_LIMIT = 12_000;

export function extractTextFromToolResponse(response: unknown): string {
  if (response === undefined || response === null) {
    return "";
  }
  if (typeof response === "string") {
    return response;
  }
  if (Array.isArray(response)) {
    return response.map(extractTextFromToolResponse).filter(Boolean).join("\n");
  }
  if (typeof response === "object") {
    const record = response as Record<string, unknown>;
    if (typeof record.stdout === "string" || typeof record.stderr === "string") {
      return [record.stdout, record.stderr].filter((value): value is string => typeof value === "string" && value.length > 0).join("\n");
    }
    if (Array.isArray(record.content)) {
      return record.content
        .map((item) => {
          if (typeof item === "object" && item !== null && "text" in item) {
            const text = (item as Record<string, unknown>).text;
            return typeof text === "string" ? text : "";
          }
          return extractTextFromToolResponse(item);
        })
        .filter(Boolean)
        .join("\n");
    }
  }
  return JSON.stringify(response, null, 2);
}

export function compressText(text: string, limitChars = DEFAULT_LIMIT): CompressionResult {
  const normalized = text.replace(/\r\n/g, "\n");
  if (looksLikeJavaTrace(normalized)) {
    return compressJavaTrace(normalized, limitChars);
  }
  if (looksLikeBuildLog(normalized)) {
    return compressBuildLog(normalized, limitChars);
  }
  if (looksLikeJsonResult(normalized)) {
    return compressJsonResult(normalized, limitChars);
  }
  const kind = detectKind(normalized);
  if (kind === "generic" && looksLikeReviewFindings(normalized)) {
    return compressReviewFindings(normalized, limitChars);
  }
  if (kind === "generic" && looksLikeErrorSummary(normalized)) {
    return compressErrorSummary(normalized, limitChars);
  }
  const lines = normalized.split("\n");
  const summaryLines = selectSummaryLines(lines, kind);
  const header = [
    "TokenOpt compressed tool output",
    `kind: ${kind}`,
    `originalChars: ${normalized.length}`
  ];
  const body = [...header, "", ...summaryLines].join("\n").trimEnd();
  const capped = body.length > limitChars ? `${body.slice(0, Math.max(0, limitChars - 80))}\n\n[truncated by TokenOpt]` : body;
  return {
    kind,
    text: capped,
    originalChars: normalized.length,
    compressedChars: capped.length,
    estimatedTokensSaved: estimateTokens(Math.max(0, normalized.length - capped.length))
  };
}

export function shouldCompressOutput(text: string, maxChars: number): boolean {
  if (looksLikeJavaTrace(text) || looksLikeBuildLog(text) || looksLikeJsonResult(text) || looksLikeReviewFindings(text) || looksLikeErrorSummary(text)) {
    return true;
  }
  if (text.length > maxChars) {
    return true;
  }
  return /(FAIL|FAILED|ERROR|AssertionError|Traceback|error TS\d+|✘|×|not ok)/i.test(text);
}

export function estimateTokens(chars: number): number {
  return Math.ceil(chars / 4);
}

function detectKind(text: string): CompressionResult["kind"] {
  if (/\bVitest\b|vitest|vi\.fn|\.(?:spec|test)\.[cm]?[jt]sx?/i.test(text)) {
    return "vitest";
  }
  if (/\bJest\b|jest|expect\(/i.test(text)) {
    return "jest";
  }
  if (/\bpytest\b|Traceback \(most recent call last\)|FAILED .*::/i.test(text)) {
    return "pytest";
  }
  if (/error TS\d{3,5}/.test(text)) {
    return "tsc";
  }
  if (/\beslint\b|no-unused-vars|Parsing error|^\S+:\d+:\d+:/m.test(text)) {
    return "eslint";
  }
  return "generic";
}

function selectSummaryLines(lines: string[], kind: CompressionResult["kind"]): string[] {
  const interesting = lines.filter((line) => isInterestingLine(line, kind)).slice(0, 160);
  const head = lines.slice(0, 20);
  const tail = lines.length > 40 ? lines.slice(-20) : [];

  if (interesting.length > 0) {
    return dedupeLines([...interesting, "", "--- first lines ---", ...head, "", "--- last lines ---", ...tail]).filter(Boolean);
  }
  return dedupeLines([...head, "", "--- last lines ---", ...tail]).filter(Boolean);
}

function isInterestingLine(line: string, kind: CompressionResult["kind"]): boolean {
  const trimmed = line.trim();
  if (!trimmed) {
    return false;
  }
  const common = /(FAIL|FAILED|ERROR|AssertionError|Traceback|Expected|Received|not ok|panic|fatal|exception)/i;
  if (common.test(trimmed)) {
    return true;
  }
  if (kind === "tsc") {
    return /error TS\d{3,5}|^\S+\.(ts|tsx|js|jsx)\(\d+,\d+\):/.test(trimmed);
  }
  if (kind === "eslint") {
    return /^\S+:\d+:\d+:|error\s{2,}|warning\s{2,}/i.test(trimmed);
  }
  if (kind === "pytest") {
    return /FAILED .*::|short test summary info|^E\s+/.test(trimmed);
  }
  return false;
}

function dedupeLines(lines: string[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const line of lines) {
    const key = line.trim();
    if (key && seen.has(key)) {
      continue;
    }
    if (key) {
      seen.add(key);
    }
    result.push(line);
  }
  return result;
}
