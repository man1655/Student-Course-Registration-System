import * as registrationService from '../services/registration.services.js';

export const registerCourse = async (req, res) => {
  try {
    const registration = await registrationService.registerCourse(
      req.user.id,
      req.body.courseId
    );
    res.status(201).json(registration);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getMyRegistrations = async (req, res) => {
  try {
    const registrations = await registrationService.getMyRegistrations(req.user.id);
    res.json(registrations);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
