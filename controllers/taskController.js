const getAllTasks = (req, res) => {
    res.json({ message: 'get all tasks' });
}

const createTasks = (req, res) => {
    res.json(req.body);
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