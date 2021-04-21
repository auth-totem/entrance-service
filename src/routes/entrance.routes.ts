import { Router } from 'express';

import { entranceController } from '../controllers';

const routes = Router();

routes.post('/entrance', entranceController.create);

export default routes;