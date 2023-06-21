const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const tasks = require('./route/TaskRoute');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

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
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening at http://localhost:${port}`));
  } catch (error) {
    console.log(error);
  }
}

start();