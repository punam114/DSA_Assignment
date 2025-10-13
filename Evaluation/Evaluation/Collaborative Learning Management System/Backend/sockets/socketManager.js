module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('join-lesson', (lessonId) => {
      socket.join(`lesson-${lessonId}`);
      console.log(`User ${socket.id} joined lesson ${lessonId}`);
    });

    socket.on('leave-lesson', (lessonId) => {
      socket.leave(`lesson-${lessonId}`);
      console.log(`User ${socket.id} left lesson ${lessonId}`);
    });

    socket.on('new-comment', (data) => {
      socket.to(`lesson-${data.lessonId}`).emit('comment-added', data);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};