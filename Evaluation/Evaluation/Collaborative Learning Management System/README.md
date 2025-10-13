# Collaborative Learning Management System (LMS)

A full-stack MERN application for collaborative learning with real-time features.

## Features

- **Authentication & Authorization**: JWT-based auth with instructor/student roles
- **Course Management**: Instructors can create/manage courses and lessons
- **Real-time Comments**: Live commenting system using Socket.IO
- **Student Enrollment**: Students can enroll in courses and track progress
- **Responsive Design**: Clean, mobile-friendly interface

## Tech Stack

- **Frontend**: React.js, React Router, Socket.IO Client
- **Backend**: Node.js, Express.js, Socket.IO
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT tokens

## Setup Instructions

### Backend Setup

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file with:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/collaborative-lms
   JWT_SECRET=your_jwt_secret_key_here
   CLIENT_URL=http://localhost:3000
   ```

4. Start MongoDB service

5. Run the server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. **Sign Up**: Create an account as either instructor or student
2. **Instructor Flow**:
   - Create courses from dashboard
   - Add lessons to courses
   - Manage course content
3. **Student Flow**:
   - Browse available courses
   - Enroll in courses
   - View lessons and participate in discussions

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Courses
- `GET /api/courses` - Get all courses
- `POST /api/courses` - Create course (instructor only)
- `GET /api/courses/:id` - Get course details
- `POST /api/courses/:id/enroll` - Enroll in course (student only)

### Lessons
- `GET /api/lessons/course/:courseId` - Get course lessons
- `POST /api/lessons` - Create lesson (instructor only)
- `GET /api/lessons/:id` - Get lesson details

### Comments
- `GET /api/comments/lesson/:lessonId` - Get lesson comments
- `POST /api/comments` - Add comment
- `PUT /api/comments/:id` - Update comment
- `DELETE /api/comments/:id` - Delete comment

## Real-time Features

- Live comment updates using Socket.IO
- Real-time lesson additions/updates
- Activity feed for course interactions

## Future Enhancements

- File upload for course materials
- Video streaming integration
- Progress tracking and analytics
- Email notifications
- Advanced search and filtering
- Mobile app development