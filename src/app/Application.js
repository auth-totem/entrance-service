const container = require('src/container');

module.exports = class Application {
  constructor() {
    this.container = container;
  }

  async start() {
    const { server } = this.container.cradle;

    await server.start();
  }
};
