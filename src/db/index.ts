import knex from 'knex';

import config from '../config';

const connection = knex(config.database);

export default connection;