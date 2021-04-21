import express from 'express';

import routes from './routes'
import { loggerMiddleware } from './middlewares'

const app = express();
app.use(express.json());
app.use(loggerMiddleware);
app.use(routes);

export default app;