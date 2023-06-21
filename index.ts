import express from 'express';
import tasks from './route/TaskRoute';
import { connectDB } from './db/connect';
import dotenv from 'dotenv';

dotenv.config();
import { notFound } from './middleware/not-found';
import { errorHandlerMiddleware } from './middleware/error-handler';

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
// TODO add static resources & path
// app.use(express.static('./public'));

// route
app.use('/api/v1/tasks', tasks);

// middleware
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI as string);
        app.listen(port, () => console.log(`server is listening at http://localhost:${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();