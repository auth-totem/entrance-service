const fileName = 'UserRepository';

module.exports = class UserRepository {
  constructor({ db, logger }) {
    this.db = db;
    this.logger = logger;
  }

  async findLastStatus(idUser, event) {
    const callName = `${fileName}.getUsers()`;
    this.logger.info(
      `${callName} trying to get user status: ${event} with user: ${idUser}`
    );

    return await this.db
      .select('idEvent')
      .from('cadaster_has_event')
      .where('idCadaster', idUser)
      .andWhere('idEvent', event)
      .first();
  }

  async getUsers(type) {
    const callName = `${fileName}.getUsers()`;
    this.logger.info(`${callName} trying to get user list as: ` + type);

    return await this.db
      .select('*')
      .from('cadaster')
      .leftJoin(
        'cadaster_has_event',
        'cadaster_has_event.idCadaster',
        'cadaster.idCadaster'
      )
      .leftJoin('event', 'event.idevent', 'cadaster_has_event.idEvent')
      .where('event.idevent', type);
  }

  async getUserByWallet(codeWallet) {
    const callName = `${fileName}.getUserByWallet()`;
    this.logger.info(
      `${callName} trying to get user by wallet, with wallet: ` + codeWallet
    );
    return await this.db
      .select('*')
      .from('wallet')
      .where('codeWallet', codeWallet)
      .leftJoin('cadaster', 'cadaster.idCadaster', 'wallet.idCadaster')
      .first();
  }

  async changeStatus(ev) {
    const callName = `${fileName}.changeStatus()`;
    this.logger.info(
      `${callName} trying to change status\n` + JSON.stringify(ev)
    );
    return await this.db.insert(ev).into('cadaster_has_event');
  }

  async deleteStatus(code, ev) {
    const callName = `${fileName}.deleteStatus()`;
    this.logger.info(
      `${callName} trying to delete status for user: ${code} in the event: ${ev}`
    );

    return await this.db
      .where('idCadaster', code)
      .andWhere('idEvent', ev)
      .del()
      .into('cadaster_has_event');
  }
};
