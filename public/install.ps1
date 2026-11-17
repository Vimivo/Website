# ==============================================================================
#  Vimivo — Every Sound. Every Frame.
#  Official Windows PowerShell Quick Installer
#
#  Designed & Developed by TA Shanto
#  Website: https://tashanto.com
#  Repository: https://github.com/Vimivo/Player
# ==============================================================================

Write-Host "======================================================================" -ForegroundColor Cyan
Write-Host "  Vimivo — Every Sound. Every Frame." -ForegroundColor White
Write-Host "  Designed & Developed by TA Shanto (https://tashanto.com)" -ForegroundColor Cyan
Write-Host "  Support on Support Kori: https://www.supportkori.com/iamtashanto" -ForegroundColor Magenta
Write-Host "======================================================================" -ForegroundColor Cyan
Write-Host ""

$DownloadUrl = "https://vimivo.tashanto.com/api/download/windows"
$OutputFile = "$env:USERPROFILE\Downloads\Vimivo-Setup.exe"

Write-Host "==> Downloading official Windows 64-bit installer..." -ForegroundColor Green
Invoke-WebRequest -Uri $DownloadUrl -OutFile $OutputFile -UseBasicParsing

Write-Host "✓ Successfully downloaded to $OutputFile" -ForegroundColor Green
Write-Host "==> Launching Vimivo installer..." -ForegroundColor Yellow
Start-Process -FilePath $OutputFile
