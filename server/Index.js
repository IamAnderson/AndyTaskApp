import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import taskRouter from './routes/taskRoutes/task.js'
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use('/tasks', taskRouter);


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Db connected and Server is running at: http://localhost:${process.env.PORT}/`);
    });
})
.catch((err) => console.log("Err:", err));
