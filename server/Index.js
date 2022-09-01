import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';

import taskRouter from './routes/taskRoutes/task.js'
import authRouter from './routes/authRoutes/user.js'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use('/tasks', taskRouter);
app.use("/user", authRouter);

const __dirname = dirname(fileURLToPath(import.meta.url));

//Serve Frontend
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, '../client/build')))

     app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'))
    )
  } else {
    app.get('/', (req, res) => res.send('Please set to production'));
  }


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Db connected and Server is running at: http://localhost:${process.env.PORT}/`);
    });
})
.catch((err) => {console.log("Err:", err); process.exit(1)});
