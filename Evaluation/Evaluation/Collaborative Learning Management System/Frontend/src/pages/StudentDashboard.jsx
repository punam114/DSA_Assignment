import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/axiosInstance';

const StudentDashboard = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const fetchAllCourses = async () => {
    try {
      // Get all courses for browsing
      const allRes = await API.get('/courses/all');
      setAllCourses(allRes.data);
      
      // Get user profile to see enrolled courses
      const profileRes = await API.get('/auth/profile');
      setEnrolledCourses(profileRes.data.enrolledCourses || []);
    } catch (err) {
      console.error('Error fetching courses:', err);
    }
  };

  const enrollInCourse = async (courseId) => {
    try {
      await API.post(`/courses/${courseId}/enroll`);
      fetchAllCourses();
    } catch (err) {
      console.error('Error enrolling in course:', err);
    }
  };

  const isEnrolled = (courseId) => {
    return enrolledCourses.some(course => course._id === courseId || course === courseId);
  };

  return (
    <div className="dashboard">
      <h1>Student Dashboard</h1>
      
      <div className="courses-section">
        <h2>Available Courses</h2>
        <div className="courses-grid">
          {allCourses.map(course => (
            <div key={course._id} className="course-card">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p>Instructor: {course.instructor?.name}</p>
              <div className="course-actions">
                {!isEnrolled(course._id) ? (
                  <button onClick={() => enrollInCourse(course._id)}>
                    Enroll
                  </button>
                ) : (
                  <span style={{color: 'green'}}>Enrolled</span>
                )}
                <Link to={`/course/${course._id}`}>View Course</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;