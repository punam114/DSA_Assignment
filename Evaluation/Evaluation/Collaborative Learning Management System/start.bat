@echo off
echo Starting Collaborative LMS...
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
echo Both servers are starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:5173
pause