# Quick Setup Guide

## Prerequisites
- Node.js installed
- MongoDB installed and running

## Quick Start

1. **Run the startup script:**
   ```
   double-click start.bat
   ```

2. **Or manually start servers:**

   **Backend:**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

   **Frontend:**
   ```bash
   cd Frontend
   npm install
   npm run dev
   ```

3. **Access the application:**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## Test the Setup

1. Go to http://localhost:5173
2. Click "Sign Up"
3. Create an instructor account
4. Create a course
5. Add lessons
6. Create a student account
7. Enroll in the course
8. Test real-time comments

## Common Issues

1. **MongoDB not running:** Start MongoDB service
2. **Port conflicts:** Change ports in .env file
3. **CORS errors:** Check CLIENT_URL in backend .env

## Default Test Data

You can create test accounts:
- Instructor: instructor@test.com / password123
- Student: student@test.com / password123