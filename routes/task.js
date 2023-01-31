const express = require('express');
const router = express.Router();
const { getAllTasks, createTasks, updateTasks, getTask, deleteTask } = require('../controllers/taskController');

router.route('/').get(getAllTasks).post(createTasks);
router.route('/:id').get(getTask).patch(updateTasks).delete(deleteTask);

module.exports = router;