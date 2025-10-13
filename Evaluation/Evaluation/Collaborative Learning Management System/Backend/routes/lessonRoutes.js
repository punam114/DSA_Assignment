const express = require('express');
const { createLesson, getLessons, getLesson, updateLesson, deleteLesson } = require('../controllers/lessonController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

router.post('/', authMiddleware, roleMiddleware(['instructor']), createLesson);
router.get('/course/:courseId', authMiddleware, getLessons);
router.get('/:id', authMiddleware, getLesson);
router.put('/:id', authMiddleware, roleMiddleware(['instructor']), updateLesson);
router.delete('/:id', authMiddleware, roleMiddleware(['instructor']), deleteLesson);

module.exports = router;