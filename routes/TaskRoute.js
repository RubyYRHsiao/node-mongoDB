const express = require('express');
const router = express.Router();
const { getAllTasks, createTask, updateTasks, getTask, deleteTask } = require('../controllers/TaskController');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTasks).delete(deleteTask);

module.exports = router;