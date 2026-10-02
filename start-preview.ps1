$nodeCommand = Get-Command node -ErrorAction Stop
$previewListener = Get-NetTCPConnection -LocalPort 4173 -State Listen -ErrorAction SilentlyContinue
if (-not $previewListener) {
    Start-Process -FilePath $nodeCommand.Source -ArgumentList 'server.cjs' -WorkingDirectory $PSScriptRoot -WindowStyle Hidden
}
Write-Output 'Preview: http://127.0.0.1:4173/'
