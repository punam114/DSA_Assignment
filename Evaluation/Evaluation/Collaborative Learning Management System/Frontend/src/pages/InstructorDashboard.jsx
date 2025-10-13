import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/axiosInstance';

const InstructorDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newCourse, setNewCourse] = useState({ title: '', description: '' });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await API.get('/courses');
      setCourses(res.data);
    } catch (err) {
      console.error('Error fetching courses:', err);
    }
  };

  const createCourse = async (e) => {
    e.preventDefault();
    try {
      await API.post('/courses', newCourse);
      setNewCourse({ title: '', description: '' });
      setShowForm(false);
      fetchCourses();
    } catch (err) {
      console.error('Error creating course:', err);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Instructor Dashboard</h1>
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Create Course'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={createCourse} className="course-form">
          <input
            type="text"
            placeholder="Course Title"
            value={newCourse.title}
            onChange={(e) => setNewCourse({...newCourse, title: e.target.value})}
            required
          />
          <textarea
            placeholder="Course Description"
            value={newCourse.description}
            onChange={(e) => setNewCourse({...newCourse, description: e.target.value})}
            required
          />
          <button type="submit">Create Course</button>
        </form>
      )}

      <div className="courses-grid">
        {courses.map(course => (
          <div key={course._id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>Students: {course.students?.length || 0}</p>
            <Link to={`/course/${course._id}`}>Manage Course</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorDashboard;