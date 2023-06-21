import { NextFunction, Request, Response } from 'express';
import { CustomAPIError } from '../error/custom-error';

export const errorHandlerMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message });
    }
    return res.status(500).json({ msg: 'Something went wrong, please try again!' });
}