import express from 'express';
import cors from 'cors';

import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//Not Found

//Application Routes
app.use('/api/v1', router);

//Health Check
app.get('/topper', (req, res) => {
  res.send("Topper Uni is 🏃‍♂️. Let's Go !!!");
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
