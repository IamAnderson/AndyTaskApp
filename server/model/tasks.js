import mongoose from "mongoose";
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    text: {
        type: String,
        require: true,
    },

    completed: {
        type: Boolean,
        default: false,
    },

    timestamp: {
        type: String,
        default: Date.now()
    }
});

const Task = mongoose.model("Task", taskSchema)
export default Task