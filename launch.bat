@echo off
title Neks' EVE Client
cd /d "E:\Projects\Neks' EVE Client"

echo ========================================
echo    Neks' EVE Client
echo ========================================
echo.
echo Starting server...

:: Start server in this window
call npm run dev

:: This line only runs when you close the server (Ctrl+C)
echo.
echo Server stopped.
timeout /t 2 /nobreak >nul
exit