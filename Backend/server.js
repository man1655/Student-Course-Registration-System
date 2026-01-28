import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/db.js';

dotenv.config();

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Server + DB setup in progress...');
});

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully!');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
  }
};

startServer();
