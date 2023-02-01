const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./routes/task');
const connectDB = require('./db/connect');

// middleware
app.use(express.json());
app.use('/api/v1/tasks', tasks);

const start = async () => {
    try {
        await connectDB();
        app.listen(port, console.log(`server is listening at http://localhost:${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();