import express from 'express'
import { getUser, loginUser, registerUser } from '../../controller/user.js';
import { protect } from '../../middleware/authMiddleware.js';

const router = express.Router();

router.post("/", registerUser); 

router.post("/login", loginUser);

router.get("/me", protect, getUser);

export default router