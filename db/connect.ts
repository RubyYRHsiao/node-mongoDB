import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

export const connectDB = (url: string) => mongoose.connect(url);