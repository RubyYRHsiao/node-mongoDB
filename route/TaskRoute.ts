import express from 'express';
import { getAllTasks, createTask, updateTasks, getTask, deleteTask } from '../controller/TaskController';

const router = express.Router();
router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTasks).delete(deleteTask);

export default router;