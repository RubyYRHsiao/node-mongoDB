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

const getTask = async (req, res) => {
    try {
        const { id: taskId } = req.params;
        const task = await Task.findOne({ _id: taskId });
        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${taskId}` });
        }
        res.status(200).json({ task });
    } catch (e) {
        res.status(500).json({ msg: e });
    }
}

const updateTasks = (req, res) => {
    res.json({ message: 'update task' });
}

const deleteTask = async (req, res) => {
    try {
        const { id: taskId } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskId });
        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${taskId}` });
        }
        res.status(200).json({ task });
    } catch (e) {
        res.status(500).json({ msg: e });
    }
}

module.exports = {
    getAllTasks,
    createTasks,
    getTask,
    updateTasks,
    deleteTask
}