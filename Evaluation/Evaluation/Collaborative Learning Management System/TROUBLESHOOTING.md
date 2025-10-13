# Troubleshooting Guide

## Signup Not Working - Common Issues

### 1. MongoDB Not Running
**Symptoms:** Backend starts but signup fails
**Solution:**
```bash
# Start MongoDB service
net start MongoDB
# OR
mongod
```

### 2. Backend Server Not Running
**Symptoms:** "Network Error" or connection refused
**Solution:**
```bash
cd backend
npm run dev
```

### 3. CORS Issues
**Symptoms:** CORS policy errors in browser console
**Solution:** Backend .env should have:
```
CLIENT_URL=http://localhost:5173
```

### 4. Port Conflicts
**Symptoms:** "Port already in use"
**Solution:** Change ports in:
- Backend: `.env` file (PORT=5001)
- Frontend: `vite.config.js` (port: 5174)

## Quick Debug Steps

1. **Test Backend Connection:**
   - Go to signup page
   - Click "Test Backend Connection" button
   - Should show "Backend server is running!" and database status

2. **Check Browser Console:**
   - Open Developer Tools (F12)
   - Look for error messages in Console tab
   - Check Network tab for failed requests

3. **Check Backend Logs:**
   - Look at the backend terminal for error messages
   - Should see "MongoDB Connected" message

## Test Signup Process

1. Use these test credentials:
   - Name: Test User
   - Email: test@example.com
   - Password: password123
   - Role: Student or Instructor

2. Check browser console for detailed error logs

## Common Error Messages

- **"User already exists"** → Use different email
- **"All fields are required"** → Fill all form fields
- **"Network Error"** → Backend not running
- **"CORS error"** → Wrong CLIENT_URL in backend