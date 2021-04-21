import EventsRepository from './events_repository';

import db from '../db';

export const eventsRepository = new EventsRepository(db);