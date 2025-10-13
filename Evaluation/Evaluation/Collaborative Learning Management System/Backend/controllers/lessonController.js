const Lesson = require('../models/Lesson');
const Course = require('../models/Course');

const createLesson = async (req, res) => {
  try {
    const { title, content, course, order } = req.body;
    
    // Verify the instructor owns the course
    const courseDoc = await Course.findById(course);
    if (!courseDoc) {
      return res.status(404).json({ message: 'Course not found' });
    }
    
    if (courseDoc.instructor.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Access denied. You can only add lessons to your own courses.' });
    }
    
    const lesson = await Lesson.create({ title, content, course, order });
    
    await Course.findByIdAndUpdate(course, {
      $push: { lessons: lesson._id }
    });
    
    res.status(201).json(lesson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLessons = async (req, res) => {
  try {
    // Check if user has access to the course
    const course = await Course.findById(req.params.courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    
    const isInstructor = course.instructor.toString() === req.user._id.toString();
    const isEnrolledStudent = course.students.includes(req.user._id);
    
    if (!isInstructor && !isEnrolledStudent) {
      return res.status(403).json({ message: 'Access denied' });
    }
    
    const lessons = await Lesson.find({ course: req.params.courseId })
      .sort({ order: 1 })
      .populate('comments');
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLesson = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id)
      .populate('course')
      .populate({
        path: 'comments',
        populate: { path: 'author', select: 'name' }
      });
    
    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }
    
    // Check access to the course
    const course = await Course.findById(lesson.course._id);
    const isInstructor = course.instructor.toString() === req.user._id.toString();
    const isEnrolledStudent = course.students.includes(req.user._id);
    
    if (!isInstructor && !isEnrolledStudent) {
      return res.status(403).json({ message: 'Access denied' });
    }
    
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateLesson = async (req, res) => {
  try {
    const lesson = await Lesson.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteLesson = async (req, res) => {
  try {
    await Lesson.findByIdAndDelete(req.params.id);
    res.json({ message: 'Lesson deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createLesson, getLessons, getLesson, updateLesson, deleteLesson };