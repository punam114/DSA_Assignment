import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import API from '../api/axiosInstance';

const CoursePage = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [showLessonForm, setShowLessonForm] = useState(false);
  const [newLesson, setNewLesson] = useState({
    title: '',
    content: '',
    order: 1
  });

  useEffect(() => {
    fetchCourse();
    fetchLessons();
  }, [id]);

  const fetchCourse = async () => {
    try {
      const res = await API.get(`/courses/${id}`);
      setCourse(res.data);
    } catch (err) {
      console.error('Error fetching course:', err);
    }
  };

  const fetchLessons = async () => {
    try {
      const res = await API.get(`/lessons/course/${id}`);
      setLessons(res.data);
    } catch (err) {
      console.error('Error fetching lessons:', err);
    }
  };

  const createLesson = async (e) => {
    e.preventDefault();
    try {
      await API.post('/lessons', { ...newLesson, course: id });
      setNewLesson({ title: '', content: '', order: lessons.length + 1 });
      setShowLessonForm(false);
      fetchLessons();
    } catch (err) {
      console.error('Error creating lesson:', err);
    }
  };

  const isInstructor = user?.role === 'instructor' && course?.instructor?._id === user?._id;

  if (!course) return <div>Loading...</div>;

  return (
    <div className="course-page">
      <div className="course-header">
        <h1>{course.title}</h1>
        <p>{course.description}</p>
        <p>Instructor: {course.instructor?.name}</p>
        
        {isInstructor && (
          <button onClick={() => setShowLessonForm(!showLessonForm)}>
            {showLessonForm ? 'Cancel' : 'Add Lesson'}
          </button>
        )}
      </div>

      {showLessonForm && (
        <form onSubmit={createLesson} className="lesson-form">
          <input
            type="text"
            placeholder="Lesson Title"
            value={newLesson.title}
            onChange={(e) => setNewLesson({...newLesson, title: e.target.value})}
            required
          />
          <textarea
            placeholder="Lesson Content"
            value={newLesson.content}
            onChange={(e) => setNewLesson({...newLesson, content: e.target.value})}
            required
          />
          <input
            type="number"
            placeholder="Order"
            value={newLesson.order}
            onChange={(e) => setNewLesson({...newLesson, order: parseInt(e.target.value)})}
            required
          />
          <button type="submit">Create Lesson</button>
        </form>
      )}

      <div className="lessons-list">
        <h2>Lessons</h2>
        {lessons.map(lesson => (
          <div key={lesson._id} className="lesson-item">
            <h3>{lesson.title}</h3>
            <p>{lesson.content.substring(0, 100)}...</p>
            <Link to={`/lesson/${lesson._id}`}>View Lesson</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;