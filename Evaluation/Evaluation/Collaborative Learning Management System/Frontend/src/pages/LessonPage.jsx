import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useSocket } from '../context/SocketContext.jsx';
import API from '../api/axiosInstance';

const LessonPage = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const socket = useSocket();
  const [lesson, setLesson] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetchLesson();
    fetchComments();
    
    if (socket) {
      socket.emit('join-lesson', id);
      socket.on('comment-added', (comment) => {
        setComments(prev => [comment, ...prev]);
      });
    }

    return () => {
      if (socket) {
        socket.emit('leave-lesson', id);
        socket.off('comment-added');
      }
    };
  }, [id, socket]);

  const fetchLesson = async () => {
    try {
      const res = await API.get(`/lessons/${id}`);
      setLesson(res.data);
    } catch (err) {
      console.error('Error fetching lesson:', err);
    }
  };

  const fetchComments = async () => {
    try {
      const res = await API.get(`/comments/lesson/${id}`);
      setComments(res.data);
    } catch (err) {
      console.error('Error fetching comments:', err);
    }
  };

  const addComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      const res = await API.post('/comments', {
        content: newComment,
        lesson: id
      });
      
      setNewComment('');
      
      if (socket) {
        socket.emit('new-comment', {
          lessonId: id,
          comment: res.data
        });
      }
      
      fetchComments();
    } catch (err) {
      console.error('Error adding comment:', err);
    }
  };

  if (!lesson) return <div>Loading...</div>;

  return (
    <div className="lesson-page">
      <div className="lesson-content">
        <h1>{lesson.title}</h1>
        <div className="lesson-body">
          <p>{lesson.content}</p>
        </div>
      </div>

      <div className="comments-section">
        <h3>Comments</h3>
        
        <form onSubmit={addComment} className="comment-form">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            rows="3"
          />
          <button type="submit">Post Comment</button>
        </form>

        <div className="comments-list">
          {comments.map(comment => (
            <div key={comment._id} className="comment">
              <div className="comment-header">
                <strong>{comment.author?.name}</strong>
                <span className="comment-time">
                  {new Date(comment.createdAt).toLocaleString()}
                </span>
              </div>
              <p>{comment.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LessonPage;