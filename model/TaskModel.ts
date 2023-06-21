import { ITask } from '../interface/Task';

const Task = require('../entity/Task');

const getAllTasks = () => {
  return Task.find({});
};

const createTask = (task: ITask) => {
  return Task.create(task);
};

const getTask = (taskId: ITask['id']) => {
  return Task.findOne({ _id: taskId });
};

const updateTask = (taskId: ITask['id'], newTask: ITask) => {
  return Task.findOneAndUpdate({ _id: taskId }, newTask, {
    new: true,
    runValidators: true
  });
}

const deleteTask = (taskId: ITask['id']) => {
  return Task.findOneAndDelete({ _id: taskId });
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};