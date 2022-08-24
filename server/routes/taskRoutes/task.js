import express from 'express'
import { getTasks, createTask, deleteTask, updateTask, completeTask } from '../../controller/tasks.js'
import { protect } from '../../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getTasks);

router.post('/', protect, createTask);

router.put('/:id', protect, updateTask);

router.put('/completed/:id', completeTask);

router.delete('/:id', deleteTask);

export default router;
