import server from './server';
import {logger} from './utils/logger'

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => logger.info(`Server running on ${PORT}`));
