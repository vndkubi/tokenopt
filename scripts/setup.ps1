<#
.SYNOPSIS
    TokenOpt one-shot setup script.
.DESCRIPTION
    Builds TokenOpt, then configures it for a target repository.
    Supports VS Code Copilot, Codex CLI, or both.
    Auto-detects CodeGraph if available as a sibling directory.
.PARAMETER TargetRepo
    Path to the repository to set up TokenOpt for. Defaults to current directory.
.PARAMETER Agent
    Which agent(s) to configure: copilot, codex, or both. Default: both
.PARAMETER Scope
    Copilot MCP config scope: user, repo, or both. Default: both
.PARAMETER CodeGraphRoot
    Path to CodeGraph repo root. Auto-detected if omitted.
.PARAMETER NoBuild
    Skip npm build (use when dist/ is already current).
.EXAMPLE
    .\scripts\setup.ps1
    .\scripts\setup.ps1 -TargetRepo C:\dev\myrepo
    .\scripts\setup.ps1 -TargetRepo C:\dev\myrepo -Agent copilot -CodeGraphRoot C:\dev\code-graph
#>
param(
    [string]$TargetRepo    = "",
    [ValidateSet("copilot","codex","both")]
    [string]$Agent         = "both",
    [ValidateSet("user","repo","both")]
    [string]$Scope         = "both",
    [string]$CodeGraphRoot = "",
    [switch]$NoBuild
)

$ErrorActionPreference = "Stop"

function Step  { Write-Host "`n>> $args" -ForegroundColor Cyan }
function Ok    { Write-Host "   OK  $args" -ForegroundColor Green }
function Warn  { Write-Host "   !!  $args" -ForegroundColor Yellow }
function Fail  { Write-Host "   XX  $args" -ForegroundColor Red; exit 1 }

$TokenOptRoot = Split-Path -Parent $PSScriptRoot
$CliPath      = Join-Path $TokenOptRoot "dist\cli.js"

Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "  TokenOpt Setup" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "  tokenopt: $TokenOptRoot"

# 1. Node version
Step "Checking Node.js"
$nodeVer = ""; try { $nodeVer = (& node --version 2>&1).Trim() } catch { Fail "node not found. Install >= 20 from https://nodejs.org" }
$nodeMaj = [int](($nodeVer -split "\.")[0] -replace "[^0-9]","")
if ($nodeMaj -lt 20) { Fail "Node $nodeVer found — need >= 20" }
Ok "Node $nodeVer"

# 2. Build
Step "Building TokenOpt"
if (-not $NoBuild) {
    Push-Location $TokenOptRoot
    Write-Host "   npm install..." -ForegroundColor Gray
    & npm.cmd install --silent
    if ($LASTEXITCODE -ne 0) { Pop-Location; Fail "npm install failed" }
    Write-Host "   npm run build..." -ForegroundColor Gray
    & npm.cmd run build 2>&1 | Out-Null
    $buildExit = $LASTEXITCODE
    Pop-Location
    if ($buildExit -ne 0) { Fail "npm run build failed" }
    Ok "Build complete"
} else {
    if (-not (Test-Path $CliPath)) { Fail "dist/cli.js not found. Run without -NoBuild first." }
    Ok "Skipped (existing dist/)"
}

# 3. Target repo
Step "Target repository"
if (-not $TargetRepo) {
    $TargetRepo = Read-Host "   Path to target repo (Enter = current directory)"
    if (-not $TargetRepo) { $TargetRepo = (Get-Location).Path }
}
$res = Resolve-Path $TargetRepo -ErrorAction SilentlyContinue
if ($res) { $TargetRepo = $res.Path }
if (-not (Test-Path $TargetRepo)) { Fail "Path not found: $TargetRepo" }
Ok $TargetRepo

# 4. CodeGraph auto-detect
Step "CodeGraph detection"
if (-not $CodeGraphRoot) {
    if ($env:TOKENOPT_CODEGRAPH_ROOT) {
        $CodeGraphRoot = $env:TOKENOPT_CODEGRAPH_ROOT
        Ok "from env TOKENOPT_CODEGRAPH_ROOT: $CodeGraphRoot"
    } else {
        $parent = Split-Path -Parent $TokenOptRoot
        $found  = $false
        foreach ($sib in @("code-graph","codegraph","CodeGraph")) {
            $c = Join-Path $parent $sib
            if (Test-Path (Join-Path $c "dist\cli.js")) {
                $CodeGraphRoot = $c; $found = $true
                Ok "auto-detected sibling: $CodeGraphRoot"
                break
            }
        }
        if (-not $found) { Warn "CodeGraph not found — TokenOpt-only mode (still best token savings)" }
    }
} else {
    if (-not (Test-Path (Join-Path $CodeGraphRoot "dist\cli.js"))) {
        Warn "CodeGraph dist/cli.js not found at $CodeGraphRoot — skipping"
        $CodeGraphRoot = ""
    } else {
        Ok "CodeGraph: $CodeGraphRoot"
    }
}

# 5a. VS Code Copilot
if ($Agent -eq "copilot" -or $Agent -eq "both") {
    Step "Configuring VS Code Copilot MCP"
    $args1 = @($CliPath,"setup","copilot","--scope",$Scope)
    if ($CodeGraphRoot) { $args1 += @("--include-codegraph","--codegraph-root",$CodeGraphRoot) }
    Push-Location $TargetRepo
    $out = & node @args1 2>&1
    $ex  = $LASTEXITCODE
    Pop-Location
    if ($ex -ne 0) { Fail "setup copilot failed (exit $ex)" }
    Ok "Copilot configured"
    $out | Where-Object { $_ -match "^-|^repo:|^vs code|^copilot|^codegraph" } |
        ForEach-Object { Write-Host "     $_" -ForegroundColor Gray }
}

# 5b. Codex hooks
if ($Agent -eq "codex" -or $Agent -eq "both") {
    Step "Installing Codex hooks"
    Push-Location $TargetRepo
    $out = & node $CliPath "install" "codex" "--scope" "user" 2>&1
    $ex  = $LASTEXITCODE
    Pop-Location
    if ($ex -ne 0) { Fail "install codex failed (exit $ex)" }
    Ok "Codex hooks installed"
    $out | ForEach-Object { Write-Host "     $_" -ForegroundColor Gray }
}

# 6. Doctor
Step "Running doctor"
Push-Location $TargetRepo
& node $CliPath "doctor" 2>&1 | ForEach-Object { Write-Host "   $_" -ForegroundColor Gray }
if ($Agent -eq "copilot" -or $Agent -eq "both") {
    Write-Host ""
    & node $CliPath "doctor" "copilot" 2>&1 | ForEach-Object { Write-Host "   $_" -ForegroundColor Gray }
}
Pop-Location

# 7. Summary
Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "  Setup complete" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  CLI:  node `"$CliPath`" <command>"
Write-Host ""
Write-Host "  Next steps:" -ForegroundColor Yellow
if ($Agent -eq "copilot" -or $Agent -eq "both") {
    Write-Host "  1. Open VS Code in: $TargetRepo"
    Write-Host "     Command palette -> MCP: List Servers -> start tokenopt -> enable tools"
    Write-Host "  2. Copilot Chat -> @tokenopt-cost-gate agent or inline chat"
    Write-Host ""
}
if ($Agent -eq "codex" -or $Agent -eq "both") {
    Write-Host "  3. Open Codex CLI and run: /hooks"
    Write-Host "     Review and trust the TokenOpt hook commands"
    Write-Host ""
}
if ($CodeGraphRoot) {
    Write-Host "  CodeGraph bridge detected." -ForegroundColor Green
    Write-Host "  To enable 1-MCP internal bridge add to .tokenopt/config.json:"
    Write-Host '    { "codegraph": { "enabled": true } }'
    Write-Host ""
}
Write-Host "  Health checks:"
Write-Host "    node `"$CliPath`" doctor"
Write-Host "    node `"$CliPath`" doctor copilot"
Write-Host "    node `"$CliPath`" report"
Write-Host ""
