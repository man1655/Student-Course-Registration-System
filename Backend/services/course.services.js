import { Course } from '../models/index.js';

export const createCourse = async (data) => {
  return await Course.create(data);
};

export const getAllCourses = async () => {
  return await Course.findAll();
};

export const updateCourse = async (id, data) => {
  const course = await Course.findByPk(id);
  if (!course) throw new Error('Course not found');
  return await course.update(data);
};

export const deleteCourse = async (id) => {
  const course = await Course.findByPk(id);
  if (!course) throw new Error('Course not found');
  return await course.destroy();
};
