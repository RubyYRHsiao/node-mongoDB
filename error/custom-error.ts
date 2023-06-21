export class CustomAPIError extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'CustomAPIError';
    }
}

export const createCustomError = (message: string, statusCode: number) => {
    return new CustomAPIError(message, statusCode);
}