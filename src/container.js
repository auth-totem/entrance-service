const {
  createContainer,
  asClass,
  asFunction,
  asValue,
  InjectionMode,
} = require('awilix');

const Server = require('./interfaces/http/Server');
const Router = require('./interfaces/http/Router');
const logger = require('./infra/logging/Logger');
const database = require('./infra/database/connection');

const config = require('config/configLoader');

const container = createContainer()
  .register({
    server: asClass(Server).singleton(),
    logger: asFunction(logger).singleton(),
    db: asFunction(database).singleton(),
    router: asFunction(Router),
    config: asValue(config),
  })
  .loadModules(
    [
      './infra/integration/**/*.js',
      './infra/repositories/*.js',
      './app/**/*.js',
      './interfaces/http/**/*.js',
    ],
    {
      cwd: __dirname,
      formatName: 'camelCase',
      resolverOptions: {
        injectionMode: InjectionMode.PROXY,
      },
    }
  );

module.exports = container;
