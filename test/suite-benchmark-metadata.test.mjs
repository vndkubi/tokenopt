import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import {
  adaptiveQualitySlicePlanForTask,
  adaptivePlanForSuiteTask,
  buildCodeGraphAnchorQueryForTask,
  buildCodeGraphFallbackRegex,
  buildCodeGraphGapRefillQueryForTask,
  buildCodeGraphMcpServerConfig,
  buildSuitePrompt,
  buildSuiteRouteMetadata,
  scoreSuiteIdeaQuality
} from "../dist/suite-benchmark.js";

test("adaptive suite policy avoids CodeGraph for review tasks", () => {
  const plan = adaptivePlanForSuiteTask({
    id: "sample-code-review",
    class: "code_review",
    prompt: "Review this diff and return JSON findings."
  });

  assert.equal(plan.strategy, "tokenopt-review");
  assert.equal(plan.useTokenOpt, true);
  assert.equal(plan.useCodeGraph, false);
  assert.equal(plan.disableShell, true);
});

test("adaptive suite policy uses compact CodeGraph for flow tasks", () => {
  const plan = adaptivePlanForSuiteTask({
    id: "sample-investigate-flow",
    class: "investigate_flow",
    prompt: "Investigate GET /api/recalls flow and return JSON with files, symbols, tests, risks."
  });

  assert.equal(plan.strategy, "tokenopt-codegraph-compact");
  assert.equal(plan.useTokenOpt, true);
  assert.equal(plan.useCodeGraph, true);
  assert.equal(plan.disableShell, true);
});

test("adaptive suite policy escalates business, PBI, and bug trace tasks for quality", () => {
  for (const task of [
    {
      id: "doughnut-recall-business-deepdive",
      class: "business_deepdive",
      prompt: "Daily task: business deepdive the learner recall experience. Return valid compact JSON."
    },
    {
      id: "doughnut-recall-forecast-pbi-investigate",
      class: "pbi_investigate",
      prompt: "Daily task: investigate this PBI before planning edits. Acceptance criteria: Recall page forecast counts."
    },
    {
      id: "doughnut-recall-wrong-answer-bug-trace",
      class: "bug_trace",
      prompt: "Daily task: bug trace. Incorrect recall answers should schedule a retry about 12 hours later."
    }
  ]) {
    const plan = adaptivePlanForSuiteTask(task);
    assert.equal(plan.strategy, "tokenopt-codegraph-quality");
    assert.equal(plan.useTokenOpt, true);
    assert.equal(plan.useCodeGraph, true);
    assert.equal(plan.disableShell, true);
  }
});

test("adaptive quality slice plan uses exact Doughnut recall evidence slices", () => {
  const plan = adaptiveQualitySlicePlanForTask({
    id: "doughnut-recall-forecast-pbi-investigate",
    class: "pbi_investigate",
    prompt: "Daily task: investigate this PBI for Recall page due counts, dueindays, treadmill mode, and load more buttons."
  });

  assert.ok(plan);
  assert.ok(plan.slices.some((slice) => slice.file === "backend/src/main/java/com/odde/doughnut/controllers/dto/DueMemoryTrackers.java"));
  assert.ok(plan.slices.some((slice) => slice.file === "frontend/src/pages/RecallPage.vue"));
  assert.ok(plan.slices.some((slice) => slice.file === "frontend/src/composables/useRecallData.ts"));
  assert.ok(plan.requiredAnchors.includes("loadCurrentDueRecalls"));
  assert.ok(plan.requiredAnchors.includes("treadmillMode"));
});

test("contextgate natural prompt uses evidence contract instead of fixed tool calls", () => {
  const prompt = buildSuitePrompt(
    "D:\\Personal\\Projects\\doughnut",
    {
      id: "doughnut-recall-business-deepdive",
      project: "doughnut",
      class: "business_deepdive",
      winnerHypothesis: "",
      prompt: "Daily task: business deepdive the learner recall experience. Return valid compact JSON only with keys: summary, files, symbols, risks.",
      expectedEvidence: { files: [], symbols: [], terms: [] },
      qualityRubric: ["Ground the answer in source and test evidence."],
      gateAssertions: [],
      maxBudget: { packetTokens: 1800 }
    },
    "contextgate-natural"
  );

  assert.match(prompt, /Daily task: business deepdive/);
  assert.match(prompt, /Evidence slots to satisfy/);
  assert.match(prompt, /context broker/i);
  assert.match(prompt, /Keep the user's prompt, project instructions, and agent instructions authoritative/);
  assert.doesNotMatch(prompt, /tokenopt_compile_evidence/);
  assert.doesNotMatch(prompt, /get_file_slice/);
  assert.doesNotMatch(prompt, /TokenOpt/);
  assert.doesNotMatch(prompt, /CodeGraph/);
});

test("suite benchmark metadata reports acquisition mode and contract", () => {
  const metadata = buildSuiteRouteMetadata(
    "Tracebug OrderService.java:42 failing test OrderServiceTest.shouldRejectMissingPartition",
    "investigate",
    {
      finalAnswer: "acquisition_mode: direct_narrow\nevidence_contract: trace_proof\nevidence_contract_pass: false",
      mcpCalls: 1,
      shellCalls: 0
    }
  );

  assert.equal(metadata.acquisitionMode, "direct_narrow");
  assert.equal(metadata.evidenceContract, "trace_proof");
  assert.equal(metadata.evidenceContractPass, false);
  assert.equal(metadata.doubleSpend, false);
});

test("suite benchmark metadata flags direct-narrow double spend", () => {
  const metadata = buildSuiteRouteMetadata(
    "Tracebug OrderService.java:42 failing test OrderServiceTest.shouldRejectMissingPartition",
    "investigate",
    {
      finalAnswer: "Used repo-wide rg --files after packet acquisition.",
      mcpCalls: 1,
      shellCalls: 1
    }
  );

  assert.equal(metadata.acquisitionMode, "direct_narrow");
  assert.equal(metadata.doubleSpend, true);
});

test("codegraph mcp config uses local v2 cli root", () => {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), "tokenopt-codegraph-root-"));
  try {
    const cli = path.join(temp, "dist", "cli.js");
    fs.mkdirSync(path.dirname(cli), { recursive: true });
    fs.writeFileSync(cli, "", "utf8");

    const config = buildCodeGraphMcpServerConfig(
      "D:\\Personal\\Projects\\hadoop",
      "api_flow",
      { TOKENOPT_CODEGRAPH_ROOT: temp },
      process.cwd()
    );

    assert.equal(config.command, "node");
    assert.equal(config.source, "env-root");
    assert.deepEqual(config.args.slice(1), [
      "mcp",
      "--root",
      "D:\\Personal\\Projects\\hadoop",
      "--workspace-key",
      "D:\\Personal\\Projects\\hadoop",
      "--mcp-profile",
      "research"
    ]);
    assert.match(config.args[0], /dist\/cli\.js$/);
  } finally {
    fs.rmSync(temp, { recursive: true, force: true });
  }
});

test("codegraph mcp config maps direct js cli to node command", () => {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), "tokenopt-codegraph-cli-"));
  try {
    const cli = path.join(temp, "dist", "cli.js");
    fs.mkdirSync(path.dirname(cli), { recursive: true });
    fs.writeFileSync(cli, "", "utf8");

    const config = buildCodeGraphMcpServerConfig(
      "D:\\Personal\\Projects\\doughnut",
      "write_unittest",
      { TOKENOPT_CODEGRAPH_CLI: cli },
      process.cwd()
    );

    assert.equal(config.command, "node");
    assert.equal(config.source, "env-cli");
    assert.deepEqual(config.args.slice(1), [
      "mcp",
      "--root",
      "D:\\Personal\\Projects\\doughnut",
      "--workspace-key",
      "D:\\Personal\\Projects\\doughnut",
      "--mcp-profile",
      "change"
    ]);
    assert.match(config.args[0], /dist\/cli\.js$/);
  } finally {
    fs.rmSync(temp, { recursive: true, force: true });
  }
});

test("codegraph anchor query expands recall scheduling test-plan terms", () => {
  const query = buildCodeGraphAnchorQueryForTask({
    prompt: "Daily task: create a test plan for recall-answer scheduling quality. Cover correct vs wrong answers, thinkingTimeMs adjustment, early reward/late penalty, nextRecallAt recomputation, and spelling vs non-spelling paths.",
    qualityRubric: [
      "Maps recall answer entrypoints to MemoryTracker and ForgettingCurve state changes.",
      "Names existing tests for thinking time and early/late schedule adjustments."
    ]
  });

  for (const term of [
    "thinkingTimeMs",
    "MemoryTracker",
    "ForgettingCurve",
    "markAsRecalled",
    "recalledSuccessfully",
    "recallFailed",
    "forgettingCurveIndex"
  ]) {
    assert.match(query, new RegExp(`\\b${term}\\b`));
  }
  assert.doesNotMatch(query, /\bnextRecallAt\b/);
  assert.doesNotMatch(query, /\btarget_behavior\b/);
});

test("codegraph anchor query expands recall forecast PBI terms without expected evidence", () => {
  const query = buildCodeGraphAnchorQueryForTask({
    prompt: "Daily task: create an implementation plan for the Recall forecast-count PBI. Need API forecast counts for due windows 0, 3, 7, and 14 days, same timezone/half-day rules as current recall loading, monotonic counts excluding deleted/removed trackers, compatible Load more buttons, and UI counts that do not break treadmill mode or current-session progress.",
    qualityRubric: [
      "Connects backend recall due logic, frontend Recall page, and existing Load more/treadmill behavior.",
      "Includes monotonic forecast-count behavior and timezone/half-day validation."
    ]
  });

  for (const term of [
    "RecallsController",
    "RecallService",
    "getDueMemoryTrackers",
    "alignByHalfADay",
    "currentRecallWindowEndAt",
    "RecallPage",
    "treadmillMode"
  ]) {
    assert.match(query, new RegExp(`\\b${term}\\b`));
  }
});

test("codegraph fallback regex is bounded and shell-safe", () => {
  const regex = buildCodeGraphFallbackRegex("RecallsController RecallService currentRecallWindowEndAt /api/recalls");

  assert.match(regex, /RecallsController\|RecallService/);
  assert.match(regex, /currentRecallWindowEndAt/);
  assert.match(regex, /\/api\/recalls/);
});

test("codegraph gap refill query targets derived scheduling methods", () => {
  const query = buildCodeGraphGapRefillQueryForTask({
    prompt: "Daily task: create a test plan for recall-answer scheduling quality. Cover thinkingTimeMs adjustment and nextRecallAt recomputation.",
    qualityRubric: [
      "Maps recall answer entrypoints to MemoryTracker and ForgettingCurve state changes."
    ]
  });

  assert.equal(query, "ForgettingCurve calculateThinkingTimeAdjustment");
});

test("suite idea quality rewards grounded actionable proposals", () => {
  const task = {
    id: "sample-test-plan",
    project: "sample",
    class: "api_flow_unit_test_plan",
    prompt: "Return valid compact JSON only with keys: existing_coverage, missing_coverage, files, symbols, tests_to_add, test_commands, risks.",
    expectedEvidence: {
      files: [
        "src/main/java/app/MemoryTracker.java",
        "src/test/java/app/MemoryTrackerTest.java"
      ],
      symbols: ["markAsRecalled"],
      terms: ["nextRecallAt"]
    },
    qualityRubric: [],
    gateAssertions: []
  };
  const result = scoreSuiteIdeaQuality(task, JSON.stringify({
    existing_coverage: ["src/test/java/app/MemoryTrackerTest.java covers markAsRecalled"],
    missing_coverage: ["nextRecallAt recomputation edge case"],
    files: ["src/main/java/app/MemoryTracker.java", "src/test/java/app/MemoryTrackerTest.java"],
    symbols: ["markAsRecalled"],
    tests_to_add: [{ file: "src/test/java/app/MemoryTrackerTest.java", name: "recomputes nextRecallAt" }],
    test_commands: ["./gradlew test --tests app.MemoryTrackerTest"],
    risks: ["boundary timing risk"]
  }));

  assert.equal(result.passedGate, true);
  assert.ok(result.score >= 0.75);
});

test("suite idea quality rejects generic ungrounded proposals", () => {
  const task = {
    id: "sample-test-plan",
    project: "sample",
    class: "api_flow_unit_test_plan",
    prompt: "Return valid compact JSON only with keys: tests_to_add.",
    expectedEvidence: {
      files: ["src/main/java/app/MemoryTracker.java"],
      symbols: ["markAsRecalled"],
      terms: ["nextRecallAt"]
    },
    qualityRubric: [],
    gateAssertions: []
  };
  const result = scoreSuiteIdeaQuality(task, JSON.stringify({
    tests_to_add: ["add more tests"],
    risks: ["unknown"]
  }));

  assert.equal(result.passedGate, false);
  assert.ok(result.score < 0.75);
});

test("suite idea quality accepts grounded review findings", () => {
  const task = {
    id: "sample-review",
    project: "sample",
    class: "review_diff",
    prompt: "Return valid compact JSON only with keys: findings, business_coverage, missing_tests, files, symbols, risks.",
    expectedEvidence: {
      files: [
        "src/main/java/app/MemoryTracker.java",
        "src/test/java/app/MemoryTrackerTest.java"
      ],
      symbols: ["recallFailed"],
      terms: ["regression"]
    },
    qualityRubric: [],
    gateAssertions: []
  };
  const result = scoreSuiteIdeaQuality(task, JSON.stringify({
    findings: [{
      severity: "P1",
      file: "src/main/java/app/MemoryTracker.java",
      symbol: "recallFailed",
      issue: "regression in wrong-answer scheduling"
    }],
    business_coverage: ["wrong-answer retry behavior remains covered"],
    similar_logic: ["recalledSuccessfully is intentionally different"],
    missing_tests: ["add src/test/java/app/MemoryTrackerTest.java regression test"],
    files: ["src/main/java/app/MemoryTracker.java", "src/test/java/app/MemoryTrackerTest.java"],
    symbols: ["recallFailed"],
    risks: ["retry window regression"]
  }));

  assert.equal(result.passedGate, true);
  assert.ok(result.score >= 0.75);
});
