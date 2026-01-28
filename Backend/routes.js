import e from 'express';
// import express from 'express';
import authRoutes from './routes/auth.routes.js';
import courseRoutes from './routes/course.routes.js';
import registrationRoutes from './routes/registration.routes.js';

const router=e.Router();

router.use('/auth',authRoutes)
router.use('/courses',courseRoutes)
router.use('/registrations',registrationRoutes)
export default router;