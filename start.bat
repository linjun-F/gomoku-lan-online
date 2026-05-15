@echo off
setlocal

cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found on this computer.
  echo Please install Node.js first, then run this file again.
  pause
  exit /b 1
)

set "URL=http://localhost:8080"

start "Gomoku LAN Server" cmd /k "cd /d ""%~dp0"" && node server.js"
timeout /t 2 /nobreak >nul
start "" "%URL%"

exit /b 0
