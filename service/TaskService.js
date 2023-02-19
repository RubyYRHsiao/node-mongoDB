const taskModel = require('../model/TaskModel');

const getAllTasks = () => {
    return taskModel.getAllTasks();
};

const createTask = (task) => {
    return taskModel.createTask(task);
};

const getTask = (taskId) => {
    return taskModel.getTask(taskId);
};

const updateTask = (taskId, newTask) => {
    return taskModel.updateTask(taskId, newTask);
}

const deleteTask = (taskId) => {
    return taskModel.deleteTask(taskId);
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};