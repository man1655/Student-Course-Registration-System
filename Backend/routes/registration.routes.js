import express from 'express';
import {
  registerCourse,
  getMyRegistrations,
} from '../controllers/registration.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import roleMiddleware from '../middlewares/role.middleware.js';

const router = express.Router();

router.post('/', authMiddleware, roleMiddleware(['student']), registerCourse);
router.get('/my', authMiddleware, roleMiddleware(['student']), getMyRegistrations);

export default router;
