import mongoose from "mongoose";
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    
    text: {
        type: String,
        require: [true, 'Please add a text value'],
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