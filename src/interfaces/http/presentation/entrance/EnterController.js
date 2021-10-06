const fileName = 'EnterController';

module.exports = ({ logger, onChangeStatusUsecase, pickAllUsersUsecase }) => ({
  onChangeEntrance: async (req, res) => {
    const callName = `${fileName}.onChangeEntrance()`;
    try {
      logger.info(`${callName} entered with data` + req.params.id);
      const { type } = req.query;
      const user = await onChangeStatusUsecase.changeStatus(
        req.params.id,
        type
      );
      logger.info(`${callName} user created with id: ${user}`);
      return res
        .status(201)
        .json({ success: { message: 'event created', ...user } });
    } catch (err) {
      logger.error(`${callName} error ocurred with error`, err);
      return res.status(403).json({ error: 'a error has ocurred' });
    }
  },

  pickUsersEntered: async (req, res) => {
    const callName = `${fileName}.pickUsersEntered()`;
    try {
      const { type } = req.query;
      const users = await pickAllUsersUsecase.pickUsers(type);
      return res.status(200).json(users);
    } catch (err) {
      logger.error(`${callName} error ocurred with error`, err);
      return res.status(403).json({ error: 'a error has ocurred' });
    }
  },

  health: (req, res) => {
    const callName = `${fileName}.health()`;
    logger.info(`${callName} entered with data`, req.body);
    return res.status(200).json({ health: 'api up and running' });
  },
});
