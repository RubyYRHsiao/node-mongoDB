const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connectionString =
    'mongodb+srv://yun:1234@nodetest1.y9iotuw.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority';

mongoose
    .connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('CONNECTED TO THE DB...'))
    .catch((err) => console.log(err));