@echo off
echo Starting Friday AI Backend...
echo.
echo Make sure you have created a .env file with your HF_TOKEN
echo.
echo HF_TOKEN=your_huggingface_token_here
echo.
echo Press any key to continue...
pause >nul

echo Starting server on port 5000...
npm start
