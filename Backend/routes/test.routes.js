import express from 'express';
import authMiddleware from '../middlewares/auth.middleware.js';
import roleMiddleware from '../middlewares/role.middleware.js';

const router = express.Router();

router.get('/admin-only', authMiddleware, roleMiddleware(['admin']), (req, res) => {
  res.json({ message: 'Hello Admin!' });
});

router.get('/student-only', authMiddleware, roleMiddleware(['student']), (req, res) => {
  res.json({ message: 'Hello Student!' });
});

export default router;
