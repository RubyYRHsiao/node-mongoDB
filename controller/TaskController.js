const taskService = require('../service/TaskService');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await taskService.getAllTasks();
        res.status(200).json({ status: 'success', data: { tasks } });
    } catch (e) {
        res.status(500).json({ msg: e });
    }
}

const createTask = async (req, res) => {
    try {
        const task = await taskService.createTask(req.body);
        res.status(201).json({ status: 'success', data: { task } });
    } catch (e) {
        res.status(500).json({ msg: e });
    }
}

const getTask = async (req, res) => {
    try {
        const { id: taskId } = req.params;
        const task = await taskService.getTask(taskId);
        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${taskId}` });
        }
        res.status(200).json({ status: 'success', data: { task } });
    } catch (e) {
        res.status(500).json({ msg: e });
    }
}

const updateTasks = async (req, res) => {
    try {
        const { id: taskId } = req.params;
        const task = await taskService.updateTask(taskId, req.body);
        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${taskId}` });
        }
        res.status(200).json({ status: 'success', data: { task } });
    } catch (e) {
        res.status(500).json({ msg: e });
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id: taskId } = req.params;
        const task = await taskService.deleteTask(taskId);
        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${taskId}` });
        }
        res.status(200).json({ status: 'success', data: { task } });
    } catch (e) {
        res.status(500).json({ msg: e });
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTasks,
    deleteTask
}