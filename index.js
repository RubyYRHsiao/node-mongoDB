const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./routes/task')

// middleware
app.use(express.json());

app.listen(port, console.log(`server is listening at http://localhost:${port}`))

app.get('/hello', (req, res) => {
    res.send('Hello');
})
app.use('/api/v1/tasks', tasks);