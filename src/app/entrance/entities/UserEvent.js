module.exports = (user) => {
  const obj = {
    idCadaster: user.idCadaster || null,
    idEvent: user.idEvent || null,
    moment: new Date(),
  };

  return obj;
};
