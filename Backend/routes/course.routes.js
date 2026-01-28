import express from 'express';
import {
  createCourse,
  getAllCourses,
  updateCourse,
  deleteCourse
} from '../controllers/course.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import roleMiddleware from '../middlewares/role.middleware.js';

const router = express.Router();

router.post('/', authMiddleware, roleMiddleware(['admin']), createCourse);
router.get('/', authMiddleware, getAllCourses);
router.put('/:id', authMiddleware, roleMiddleware(['admin']), updateCourse);
router.delete('/:id', authMiddleware, roleMiddleware(['admin']), deleteCourse);

export default router;
