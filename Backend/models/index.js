import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import UserModel from './user.model.js';
import CourseModel from './course.model.js';
import registrationModel from './registration.model.js';
 

const User = UserModel(sequelize, DataTypes);
const Course = CourseModel(sequelize, DataTypes);
const Registration = registrationModel(sequelize, DataTypes);


User.hasMany(Course, { foreignKey: 'createdBy' }); // if you want track who created
Course.belongsTo(User, { foreignKey: 'createdBy' });

User.hasMany(Registration, { foreignKey: 'userId' });
Registration.belongsTo(User, { foreignKey: 'userId' });

Course.hasMany(Registration, { foreignKey: 'courseId' });
Registration.belongsTo(Course, { foreignKey: 'courseId' });



export { sequelize, User, Course,Registration };