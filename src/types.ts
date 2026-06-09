export type TokenOptHookEventName =
  | "user-prompt-submit"
  | "pre-tool-use"
  | "post-tool-use"
  | "pre-compact";

export type TokenOptSource = "codex" | "mcp";

export type PolicyAction = "allow" | "deny" | "rewrite" | "context" | "compress";

export type BroadSearchMode = "deny" | "warn";
export type ExpensiveTestMode = "allow" | "warn" | "rewrite";
export type AnswerabilityGateMode = "hard" | "shadow" | "off";
export type TaskClass =
  | "broad_flow"
  | "review_diff"
  | "debug_runtime"
  | "refactor_scope"
  | "exact_symbol"
  | "small_repo_bypass";
export type ToolProfile = "explore" | "review" | "debug" | "refactor" | "exact" | "bypass";
export type EvidenceTaskType =
  | "api_flow"
  | "field_impact"
  | "review_diff"
  | "startup_flow"
  | "investigate"
  | "research_business"
  | "implement"
  | "write_unittest"
  | "build_handoff"
  | "unknown";
export type EvidenceCoverageStatus = "covered" | "partial" | "missing";
export type EvidenceNextAction = "answer_now" | "expand_exact" | "targeted_shell" | "ask_user";
export type RouteAction = "compile" | "bypass" | "exact_route";
export type OutputPreferredFormat = "unified_diff" | "compact_edit_plan" | "standard_answer";

export interface TokenOptConfig {
  version: 1;
  policy: {
    enabled: boolean;
    maxFileReadBytes: number;
    maxCommandOutputChars: number;
    denyGeneratedReads: boolean;
    denyLockfileReads: boolean;
    broadSearch: {
      mode: BroadSearchMode;
      maxResults: number;
    };
    expensiveTests: {
      mode: ExpensiveTestMode;
      patterns: string[];
      targetedHint: string;
    };
    answerabilityGate: {
      mode: AnswerabilityGateMode;
      logShadowDecisions: boolean;
    };
  };
  context: {
    enableSecretBlock: boolean;
    userPromptGuidance: string;
  };
  paths: {
    artifactDir?: string;
  };
  codex: {
    installScope: "user" | "repo";
  };
  codegraph: {
    enabled: boolean;
    mcpServer?: string;
  };
}

export interface LoadedConfig {
  config: TokenOptConfig;
  repoRoot: string;
  userConfigPath: string;
  repoConfigPath: string;
  loadedPaths: string[];
}

export interface TokenOptEvent {
  source: TokenOptSource;
  eventName: TokenOptHookEventName;
  cwd: string;
  sessionId?: string;
  turnId?: string;
  permissionMode?: string;
  transcriptPath?: string | null;
  toolName?: string;
  toolUseId?: string;
  toolInput?: unknown;
  toolResponse?: unknown;
  prompt?: string;
  trigger?: string;
  raw: unknown;
}

export interface PolicyRuntime {
  repoRoot: string;
  tokenoptCommand?: string;
}

export interface PolicyDecision {
  action: PolicyAction;
  reason?: string;
  systemMessage?: string;
  additionalContext?: string;
  updatedInput?: unknown;
  replacementText?: string;
  estimatedTokensSaved?: number;
  shouldPersistRaw?: boolean;
  metadata?: Record<string, unknown>;
}

export interface CompressionResult {
  kind: "vitest" | "jest" | "pytest" | "tsc" | "eslint" | "java-trace" | "build-log" | "generic";
  text: string;
  originalChars: number;
  compressedChars: number;
  estimatedTokensSaved: number;
}

export interface RouteDecision {
  taskClass: TaskClass;
  taskType: EvidenceTaskType;
  toolProfile: ToolProfile;
  action: RouteAction;
  reason: string;
  confidence: number;
  promptSignals: string[];
  negativeControl: boolean;
}

export interface CoverageCertificate {
  packet_id?: string;
  task_class: TaskClass;
  answerable: boolean;
  confidence: number;
  dimensions: Record<string, EvidenceCoverageStatus>;
  missing: string[];
  followup_exact_tools_allowed: string[];
  deny_broad_exploration: boolean;
}

export interface OutputPolicy {
  preferred_format: OutputPreferredFormat;
  avoid_full_file_rewrite: boolean;
  include_explanation_max_tokens: number;
  applies_to: string[];
}

export interface ShadowGateLog {
  taskId: string;
  taskClass: TaskClass;
  toolName: string;
  wouldDeny: boolean;
  reason?: string;
  answerable: boolean;
  estimatedTokensAvoided: number;
  timestamp: number;
  missingDimensions: string[];
  allowedExactTools: string[];
}

export interface EvidenceItem {
  id: string;
  claim: string;
  files?: string[];
  facts?: string[];
  snippet?: string;
  tokens_est?: number;
}

export interface EvidenceFollowup {
  tool: string;
  reason: string;
  args?: Record<string, unknown>;
  max_output_tokens?: number;
}

export interface EvidenceAnswerContract {
  required_sections: string[];
  evidence_rules: string[];
  quality_checks: string[];
  failure_conditions: string[];
  user_rubric: string[];
}

export interface EvidencePacket {
  packet_id: string;
  task: string;
  task_type: EvidenceTaskType;
  route?: RouteDecision;
  repo_root: string;
  answerable: boolean;
  confidence: number;
  coverage: Record<string, EvidenceCoverageStatus>;
  coverage_certificate?: CoverageCertificate;
  output_policy?: OutputPolicy;
  evidence: EvidenceItem[];
  missing: string[];
  answer_contract: EvidenceAnswerContract;
  allowed_followups: EvidenceFollowup[];
  disallowed_followups: string[];
  recommended_next_action: EvidenceNextAction;
  max_additional_calls: number;
  token_budget: {
    budget_tokens: number;
    evidence_tokens_est: number;
    response_tokens_est: number;
  };
  created_at: string;
  expires_at: string;
}

export interface EvidenceTaskState {
  packet: EvidencePacket;
  stored_at: string;
}

export interface ObservabilityEvent {
  timestamp: string;
  source: TokenOptSource | "cli";
  eventName: string;
  repoRoot: string;
  action: PolicyAction | "exec" | "audit" | "install" | "doctor" | "evidence" | "shadow";
  reason?: string;
  toolName?: string;
  command?: string;
  artifactPath?: string;
  estimatedTokensSaved?: number;
  metadata?: Record<string, unknown>;
}
