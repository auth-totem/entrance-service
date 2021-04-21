import { Knex } from 'knex';
import { EVENT, USER_EV } from '../db/tables';

export default class EventsRepository {
  private db: Knex;

  constructor(db: Knex) {
    this.db = db;
  }

  async registerNewEvent(
    idCadaster: number,
    idEvent: number
  ): Promise<{ dsc: string }> {
    try {
      console.log(
        this.db
          .insert({
            idCadaster,
            idEvent,
            moment: new Date(),
          })
          .into(USER_EV)
          .toQuery()
      );

      return await this.db
        .insert({
          idCadaster,
          idEvent,
          moment: new Date(),
        })
        .into(USER_EV)
        .then(
          async () =>
            await this.db
              .select('descriptionEvent AS dsc')
              .from(EVENT)
              .where({ idevent: idEvent })
              .first()
        )
        .catch(() => false);
    } catch (e) {
      throw 'fail in register new event';
    }
  }
}
