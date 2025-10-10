@echo off
title Friday AI Backend Server
color 0A

echo.
echo ========================================
echo    🚀 Friday AI Backend Server
echo ========================================
echo.

echo Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed or not in PATH
    echo Please install Node.js from: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo ✅ Node.js found
echo.

echo Checking if dependencies are installed...
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
    if %errorlevel% neq 0 (
        echo ❌ Failed to install dependencies
        pause
        exit /b 1
    )
    echo ✅ Dependencies installed
) else (
    echo ✅ Dependencies already installed
)

echo.
echo 🚀 Starting Friday AI Backend Server...
echo.
echo 📡 Server will be available at: http://localhost:3000
echo 🔍 Health check: http://localhost:3000/api/health
echo.
echo 💡 Press Ctrl+C to stop the server
echo.

npm start

echo.
echo 🛑 Server stopped
pause
