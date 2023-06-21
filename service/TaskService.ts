import * as taskModel from '../model/TaskModel';
import { ITask } from '../interface/ITask';

export const getAllTasks = () => {
    return taskModel.getAllTasks();
};

export const createTask = (task: ITask) => {
    return taskModel.createTask(task);
};

export const getTask = (taskId: ITask['id']) => {
    return taskModel.getTask(taskId);
};

export const updateTask = (taskId: ITask['id'], newTask: ITask) => {
    return taskModel.updateTask(taskId, newTask);
}

export const deleteTask = (taskId: ITask['id']) => {
    return taskModel.deleteTask(taskId);
}