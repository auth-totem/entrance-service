import { userInfo } from 'node:os';
import EventsRepository from '../repositories/events_repository';

export default class RegisterNewEntranceUsecase {
  private eventsRepository: EventsRepository;

  constructor(eventsRepository: EventsRepository) {
    this.eventsRepository = eventsRepository;
  }

  async registerNewEvent(userId: number, evId: number) {
    try {
      const eventRegistered = await this.eventsRepository.registerNewEvent(
        userId,
        evId
      );
      if (!eventRegistered) throw 'error on register';
      return eventRegistered;
    } catch (e) {
      throw e;
    }
  }
}
