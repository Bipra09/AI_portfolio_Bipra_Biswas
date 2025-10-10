@echo off
echo ========================================
echo    Friday AI Backend Setup Helper
echo ========================================
echo.

echo Step 1: Creating .env file...
echo # Hugging Face API Configuration > .env
echo HF_TOKEN=your_huggingface_token_here >> .env
echo PORT=3000 >> .env
echo NODE_ENV=development >> .env
echo.
echo .env file created! 
echo.
echo IMPORTANT: Edit the .env file and replace
echo "your_huggingface_token_here" with your
echo actual Hugging Face token.
echo.
echo Get your token from: https://huggingface.co/settings/tokens
echo.

echo Step 2: Starting the server...
echo.
npm start

pause
