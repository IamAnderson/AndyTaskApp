import Task from '../model/tasks.js';

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks);
    } catch (error) {
        res.status(404).json({ message: error.message });
    };
};

export const createTask = async (req, res) => {
    const taskDetail = (req.body)

    const newTask = new Task(taskDetail)
    res.status(201).json(newTask)
    try {
        await newTask.save();
    } catch (error) {
        res.status(409).json({ message: error.message });
    };
};

export const updateTask = async (req, res) => {
    try {
        let editTask = await Task.updateOne(req.params, {$set:req.body})
        res.status(201).json(editTask)
    } catch (error) {
        res.status(409).json({ message: error.message });
    };
};

export const completeTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id) 
        task.completed = !task.completed
        task.save();
        res.status(200).json(task);
    } catch (error) {
        res.status(409).json({ error: error.message })
    };
};

export const deleteTask = async (req, res) => {
    try {
        // const result = await Task.remove({_id:req.params.id})
        const result = await Task.findByIdAndDelete(req.params.id)
        res.status(200).json(result)
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
