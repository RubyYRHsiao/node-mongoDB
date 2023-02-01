const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connectionString =
    'mongodb+srv://yun:1234@nodetest1.y9iotuw.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority';

const connectDB = (url) => {
    return mongoose
        .connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
}

module.exports = connectDB;