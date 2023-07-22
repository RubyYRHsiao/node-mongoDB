import { ITask } from '../interface/ITask';
import Task from '../entity/Task';

export const getAllTasks = () => {
    return Task.find({});
};

export const createTask = (task: ITask) => {
    return Task.create(task);
};

export const getTask = (taskId: ITask['id']) => {
    return Task.findOne({ _id: taskId });
};

export const updateTask = (taskId: ITask['id'], newTask: ITask) => {
    return Task.findOneAndUpdate({ _id: taskId }, newTask, {
        new: true,
        runValidators: true
    });
}

export const deleteTask = (taskId: ITask['id']) => {
    return Task.findOneAndDelete({ _id: taskId });
}