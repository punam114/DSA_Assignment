const express = require('express');
const { getActivities, createActivity } = require('../controllers/activityController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getActivities);
router.post('/', authMiddleware, createActivity);

module.exports = router;