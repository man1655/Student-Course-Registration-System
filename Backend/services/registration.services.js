import { Registration } from '../models/index.js';

export const registerCourse = async (userId, courseId) => {
  return await Registration.create({ userId, courseId });
};

export const getMyRegistrations = async (userId) => {
  return await Registration.findAll({
    where: { userId },
    include: ['Course'], 
  });
};
