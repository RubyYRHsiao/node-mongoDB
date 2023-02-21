const taskService = require('../service/TaskService');
const asyncWrapper = require('../middleware/async');

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await taskService.getAllTasks();
    res.status(200).json({ status: 'success', data: { tasks } });
});

const createTask = asyncWrapper(async (req, res) => {
    const task = await taskService.createTask(req.body);
    res.status(201).json({ status: 'success', data: { task } });
});

const getTask = asyncWrapper(async (req, res) => {
    const { id: taskId } = req.params;
    const task = await taskService.getTask(taskId);
    if (!task) {
        return res.status(404).json({ msg: `No task with id: ${taskId}` });
    }
    res.status(200).json({ status: 'success', data: { task } });
});

const updateTasks = asyncWrapper(async (req, res) => {
    const { id: taskId } = req.params;
    const task = await taskService.updateTask(taskId, req.body);
    if (!task) {
        return res.status(404).json({ msg: `No task with id: ${taskId}` });
    }
    res.status(200).json({ status: 'success', data: { task } });
});

const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskId } = req.params;
    const task = await taskService.deleteTask(taskId);
    if (!task) {
        return res.status(404).json({ msg: `No task with id: ${taskId}` });
    }
    res.status(200).json({ status: 'success', data: { task } });
});

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTasks,
    deleteTask
}