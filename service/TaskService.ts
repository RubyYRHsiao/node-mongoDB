const taskModel = require('../model/TaskModel');
const Task = require('../entity/Task');
import { ITask } from '../interface/Task';

const getAllTasks = () => {
  return taskModel.getAllTasks();
};

const createTask = (task: ITask) => {
  return taskModel.createTask(task);
};

const getTask = (taskId: ITask['id']) => {
  return taskModel.getTask(taskId);
};

const updateTask = (taskId: ITask['id'], newTask: ITask) => {
  return taskModel.updateTask(taskId, newTask);
}

const deleteTask = (taskId: ITask['id']) => {
  return taskModel.deleteTask(taskId);
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};