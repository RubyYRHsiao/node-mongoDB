const Task = require('../models/Task');

const getAllTasks = () => {
    return Task.find({});
};

const createTask = (task) => {
    return Task.create(task);
};

const getTask = (taskId) => {
    return Task.findOne({ _id: taskId });
};

const updateTask = (taskId, newTask) => {
    return Task.findOneAndUpdate({ _id: taskId }, newTask, {
        new: true,
        runValidators: true
    });
}

const deleteTask = (taskId) => {
    return Task.findOneAndDelete({ _id: taskId });
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};