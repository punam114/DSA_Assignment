@echo off
echo ========================================
echo   Collaborative LMS Startup
echo ========================================
echo.
echo IMPORTANT: Make sure MongoDB is running!
echo.
echo To start MongoDB:
echo 1. Open Command Prompt as Administrator
echo 2. Run: net start MongoDB
echo    OR
echo    Run: mongod
echo.
pause
echo.
echo Starting Backend Server...
cd backend
start cmd /k "npm run dev"
cd ..
echo.
echo Starting Frontend Server...
cd Frontend
start cmd /k "npm run dev"
cd ..
echo.
echo Servers starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:5173
echo.
echo Press any key to exit...
pause