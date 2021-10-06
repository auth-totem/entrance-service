const createUserEv = require('src/app/entrance/entities/UserEvent');

const fileName = 'OnChangeStatusUsecase';

module.exports = ({ logger, userRepository, enterType }) => ({
  changeStatus: async (codeWallet, type) => {
    const callName = `${fileName}.changeStatus()`;
    logger.info(`${callName} entered`);

    const user = await userRepository.getUserByWallet(codeWallet);
    if (!user) return null;
    logger.info(`${callName} user picked\n` + JSON.stringify(user));

    const newStatus = enterType.find(type || 'colage');
    
    const userLastStatus = await userRepository.findLastStatus(
      user.idCadaster,
      newStatus
    );
    logger.info(
      `${callName} user laststatus\n` + JSON.stringify(userLastStatus)
    );

    if(userLastStatus)
      return await userRepository.deleteStatus(user.idCadaster, newStatus);

    const insertUser = createUserEv({
      idCadaster: user.idCadaster,
      idEvent: newStatus,
    });
    await userRepository.changeStatus(insertUser);
    return await userRepository.findLastStatus(user.idCadaster, newStatus);
  },
});
