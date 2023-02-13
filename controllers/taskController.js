const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    } catch (e) {
        res.status(500).json({ msg: e });
    }

}

const createTasks = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (e) {
        res.status(500).json({ msg: e });
    }
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