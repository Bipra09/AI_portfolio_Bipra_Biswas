Write-Host "========================================" -ForegroundColor Cyan
Write-Host "    Friday AI Backend Setup Helper" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Step 1: Creating .env file..." -ForegroundColor Yellow
"# Hugging Face API Configuration" | Out-File -FilePath ".env" -Encoding UTF8
"HF_TOKEN=your_huggingface_token_here" | Out-File -FilePath ".env" -Append -Encoding UTF8
"PORT=3000" | Out-File -FilePath ".env" -Append -Encoding UTF8
"NODE_ENV=development" | Out-File -FilePath ".env" -Append -Encoding UTF8
Write-Host ""

Write-Host ".env file created!" -ForegroundColor Green
Write-Host ""
Write-Host "IMPORTANT: Edit the .env file and replace" -ForegroundColor Red
Write-Host "'your_huggingface_token_here' with your" -ForegroundColor Red
Write-Host "actual Hugging Face token." -ForegroundColor Red
Write-Host ""
Write-Host "Get your token from: https://huggingface.co/settings/tokens" -ForegroundColor Blue
Write-Host ""

Write-Host "Step 2: Starting the server..." -ForegroundColor Yellow
Write-Host ""
npm start

Read-Host "Press Enter to continue..."
