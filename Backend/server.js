import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './models/index.js';
import routes from './routes.js'
import testRoutes from './routes/test.routes.js'

dotenv.config();

const app = express();
const PORT = 5000;
app.use(express.json());


app.use('/api',routes)
app.use('/api/test',testRoutes)

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully!');

    await sequelize.sync({ alter: true });
    console.log('✅ Models synced (tables created/updated).');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Startup failed:', error.message);
  }
};

startServer();


