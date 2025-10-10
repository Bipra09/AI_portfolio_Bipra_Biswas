# Friday AI Backend Server Startup Script
# Run this script to start the Friday AI backend server

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "    🚀 Friday AI Backend Server" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version 2>$null
    if ($nodeVersion) {
        Write-Host "✅ Node.js found: $nodeVersion" -ForegroundColor Green
    } else {
        throw "Node.js not found"
    }
} catch {
    Write-Host "❌ Node.js is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Node.js from: https://nodejs.org/" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""

# Check if dependencies are installed
Write-Host "Checking if dependencies are installed..." -ForegroundColor Yellow
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    try {
        npm install
        if ($LASTEXITCODE -ne 0) {
            Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
            Read-Host "Press Enter to exit"
            exit 1
        }
        Write-Host "✅ Dependencies installed" -ForegroundColor Green
    } catch {
        Write-Host "❌ Error installing dependencies: $_" -ForegroundColor Red
        Read-Host "Press Enter to exit"
        exit 1
    }
} else {
    Write-Host "✅ Dependencies already installed" -ForegroundColor Green
}

Write-Host ""
Write-Host "🚀 Starting Friday AI Backend Server..." -ForegroundColor Green
Write-Host ""
Write-Host "📡 Server will be available at: http://localhost:3000" -ForegroundColor Cyan
Write-Host "🔍 Health check: http://localhost:3000/api/health" -ForegroundColor Cyan
Write-Host ""
Write-Host "💡 Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

# Start the server
try {
    npm start
} catch {
    Write-Host ""
    Write-Host "❌ Error starting server: $_" -ForegroundColor Red
}

Write-Host ""
Write-Host "🛑 Server stopped" -ForegroundColor Yellow
Read-Host "Press Enter to exit"
