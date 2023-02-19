const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./routes/TaskRoute');
const connectDB = require('./db/connect');
require('dotenv').config();

// middleware
app.use(express.json());
// TODO add static resources & path
// app.use(express.static('./public'));

// routes
app.use('/api/v1/tasks', tasks);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`server is listening at http://localhost:${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();