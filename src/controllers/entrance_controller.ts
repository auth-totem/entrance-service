import { Request, Response } from 'express';

import { registerNewEntranceUsecase } from '../usecases';

import { logger } from '../utils/logger';

export default class EntranceController {
  async create(req: Request, res: Response) {
    try {
      const { idCadaster, idEvent } = req.body;
      const registerEntrance = await registerNewEntranceUsecase.registerNewEvent(
        idCadaster,
        idEvent
      );

      if (registerEntrance === undefined) throw 'fail';

      return res
        .status(201)
        .json({ message: 'user entrance', location: registerEntrance.dsc });
    } catch (e) {
      logger.error(e);
      return res.status(403).json({ error: e });
    }
  }
}
