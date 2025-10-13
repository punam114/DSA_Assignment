const express = require('express');
const { createCourse, getCourses, getAllCourses, getCourse, updateCourse, deleteCourse, enrollCourse } = require('../controllers/courseController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

router.post('/', authMiddleware, roleMiddleware(['instructor']), createCourse);
router.get('/', authMiddleware, getCourses);
router.get('/all', authMiddleware, getAllCourses);
router.get('/:id', authMiddleware, getCourse);
router.put('/:id', authMiddleware, roleMiddleware(['instructor']), updateCourse);
router.delete('/:id', authMiddleware, roleMiddleware(['instructor']), deleteCourse);
router.post('/:id/enroll', authMiddleware, roleMiddleware(['student']), enrollCourse);

module.exports = router;