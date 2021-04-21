import RegisterNewEntranceUsecase from './register_new_entrance_usecase';

import { eventsRepository } from '../repositories';

export const registerNewEntranceUsecase = new RegisterNewEntranceUsecase(
  eventsRepository
);
