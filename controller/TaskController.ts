import { NextFunction, Request, Response } from 'express';
import * as taskService from '../service/TaskService';
import { asyncWrapper } from '../middleware/async';
import { createCustomError } from '../error/custom-error';

export const getAllTasks = asyncWrapper(async (req: Request, res: Response) => {
    const tasks = await taskService.getAllTasks();
    res.status(200).json({ status: 'success', data: { tasks } });
});

export const createTask = asyncWrapper(async (req: Request, res: Response) => {
    const task = await taskService.createTask(req.body);
    res.status(201).json({ status: 'success', data: { task } });
});

export const getTask = asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
    const { id: taskId } = req.params;
    const task = await taskService.getTask(taskId);
    if (!task) {
        return next(createCustomError(`No task with id: ${taskId}`, 404));
    }
    res.status(200).json({ status: 'success', data: { task } });
});

export const updateTasks = asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
    const { id: taskId } = req.params;
    const task = await taskService.updateTask(taskId, req.body);
    if (!task) {
        return next(createCustomError(`No task with id: ${taskId}`, 404));
    }
    res.status(200).json({ status: 'success', data: { task } });
});

export const deleteTask = asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
    const { id: taskId } = req.params;
    const task = await taskService.deleteTask(taskId);
    if (!task) {
        return next(createCustomError(`No task with id: ${taskId}`, 404));
    }
    res.status(200).json({ status: 'success', data: { task } });
});