Write-Host "Starting Friday AI Backend..." -ForegroundColor Green
Write-Host ""
Write-Host "Make sure you have created a .env file with your HF_TOKEN" -ForegroundColor Yellow
Write-Host ""
Write-Host "HF_TOKEN=your_huggingface_token_here" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press any key to continue..." -ForegroundColor White
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

Write-Host "Starting server on port 5000..." -ForegroundColor Green
npm start
