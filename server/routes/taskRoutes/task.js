import express from 'express'
import { getTasks, createTask, deleteTask, updateTask, completeTask } from '../../controller/tasks.js'

const router = express.Router();

router.get('/', getTasks);

router.post('/', createTask);

router.put('/:id', updateTask);

router.put('/completed/:id', completeTask);

router.delete('/:id', deleteTask);

export default router;
