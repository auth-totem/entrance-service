import { Router } from 'express';

import healthRoutes from './heatlh.routes';
import entranceRoutes from './entrance.routes';

const routes = Router();
routes.use('/api/v1', entranceRoutes);
routes.use('/health', healthRoutes);

export default routes;
