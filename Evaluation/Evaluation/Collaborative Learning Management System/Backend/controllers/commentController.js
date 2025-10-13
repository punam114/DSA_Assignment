const Comment = require('../models/Comment');
const Lesson = require('../models/Lesson');

const createComment = async (req, res) => {
  try {
    const { content, lesson, parentComment } = req.body;
    const comment = await Comment.create({
      content,
      author: req.user._id,
      lesson,
      parentComment
    });
    
    await Lesson.findByIdAndUpdate(lesson, {
      $push: { comments: comment._id }
    });
    
    if (parentComment) {
      await Comment.findByIdAndUpdate(parentComment, {
        $push: { replies: comment._id }
      });
    }
    
    const populatedComment = await Comment.findById(comment._id)
      .populate('author', 'name');
    
    res.status(201).json(populatedComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ 
      lesson: req.params.lessonId,
      parentComment: null
    })
    .populate('author', 'name')
    .populate({
      path: 'replies',
      populate: { path: 'author', select: 'name' }
    })
    .sort({ createdAt: -1 });
    
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createComment, getComments, updateComment, deleteComment };