const Task = require('../models/Task');

const getAllTasks = (req, res) => {
    res.json({ message: 'get all tasks' });
}

const createTasks = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
}

const getTask = (req, res) => {
    res.json({ id: req.params.id })
}

const updateTasks = (req, res) => {
    res.json({ message: 'update task' });
}

const deleteTask = (req, res) => {
    res.json({ message: 'delete task' });
}

module.exports = {
    getAllTasks,
    createTasks,
    getTask,
    updateTasks,
    deleteTask
}