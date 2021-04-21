import { Router } from 'express';

const routes = Router();
routes.get('/validate', (req, res) => {
  return res.status(200).json({ message: 'api up and running' })
})

export default routes;