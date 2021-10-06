const fileName = 'PickAllUsersUsecase';

module.exports = ({ logger, userRepository, enterType }) => ({
  pickUsers: async (type) => {
    const callName = `${fileName}.pickUsers()`;
    const entrance = enterType.find(type || 'colage');
    logger.info(`${callName} entered, with type: ${entrance}`);

    const users = await userRepository.getUsers(entrance);
    if (users.length <= 0) return null;
    logger.info(`${callName} users finded\n` + JSON.stringify(users));

    return users;
  },
});
