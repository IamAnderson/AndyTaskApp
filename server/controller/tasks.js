import asyncHandler from 'express-async-handler';
import Task from '../model/tasks.js';
import User from '../model/user.js';


//Private (Authentication)

export const getTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find({ user: req.user.id })
    res.status(200).json(tasks);

    // try {
    //     const tasks = await Task.find()
    //     res.status(200).json(tasks);
    // } catch (error) {
    //     res.status(404).json({ message: error.message });
    // };
});


//Private (Authentication)
export const createTask = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
      }
    
      const newTask = await Task.create({
        text: req.body.text,
        user: req.user.id,
      })
    
      res.status(200).json(newTask)

    // if(!req.body.text) {
    //     res.status(400)
    //     throw new Error("Please add a text field")
    // }
    
    // const newTask = await Task.create({
    //     text: req.body.text,
    //     user: req.user.id
    // })
    // res.status(200).json(newTask);

    // const taskDetail = (req.body)

    // const newTask = new Task(taskDetail)
    // res.status(201).json(newTask)
    // try {
    //     await newTask.save();
    // } catch (error) {
    //     res.status(409).json({ message: error.message });
    // };
});


//Private (Authentication)
export const updateTask = asyncHandler(async (req, res) => {

    // const task = await Task.findById(req.params.id)

    // if (!task) {
    //   res.status(400)
    //   throw new Error('Task not found')
    // }
  
    // // Check for user
    // if (!req.user) {
    //   res.status(401)
    //   throw new Error('User not found')
    // }
  
    // // Make sure the logged in user matches the task user
    // if (task.user.toString !== req.user.id) {
    //   res.status(401)
    //   throw new Error('User not authorized')
    // }
  
    // const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    // })
  
    // res.status(200).json(updatedTask)


    const task = await Task.findById(req.params.id)

    if(!task){
        res.status(400)
        throw new Error("Task not found")
    }

    //Check for user
    if(!req.user){
        res.status(401)
        throw new Error("User not found")
    }

    //Make sure logged in user matches the task user
    if(task.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error("User not authorized")
    }

    const editTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, })
    res.status(201).json(editTask)


    //w/o auth
    // try {
    //     let editTask = await Task.updateOne(req.params, {$set:req.body})
    //     res.status(201).json(editTask)
    // } catch (error) {
    //     res.status(409).json({ message: error.message });
    // };
});


//Private (Authentication)
export const completeTask = asyncHandler(async (req, res) => {
        // const task = Task.findById(req.params.id) 
        // // task.completed = await !task.completed
        // const toggleTask = Task.findByIdAndUpdate(req.params.id, task.completed = tas)
        // res.status(200).json(task)

    // try {
    //     const task = await Task.findById(req.params.id) 
    //     task.completed = !task.completed
    //     task.save();
    //     res.status(200).json(task);
    // } catch (error) {
    //     res.status(409).json({ error: error.message })
    // };
});


//Private (Authentication)
export const deleteTask = asyncHandler(async (req, res) => {

    const task = await Task.findById(req.params.id)

    if (!task) {
      res.status(400)
      throw new Error('Task not found')
    }
  
    // Check for user
    if (!req.user) {
      res.status(401)
      throw new Error('User not found')
    }
  
    // Make sure the logged in user matches the task user
    if (task.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('User not authorized')
    }
  
    await task.remove()
  
    res.status(200).json({ id: req.params.id })


    //w/o auth
    // const task = await Task.findByIdAndDelete(req.params.id)
    // res.status(200).json({task: task, message: "Task has been deleted"})

    // try {
    //     // const result = await Task.remove({_id:req.params.id})
    //     const result = await Task.findByIdAndDelete(req.params.id)
    //     res.status(200).json(result)
    // } catch (error) {
    //     res.status(409).json({ message: error.message });
    // }
});
