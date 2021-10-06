module.exports = ({ enterController }) => [
  {
    method: 'put',
    path: '/entrance/:id',
    handler: enterController.onChangeEntrance,
  },
  {
    method: 'get',
    path: '/entrance',
    handler: enterController.pickUsersEntered,
  },
  {
    method: 'get',
    path: '/health',
    handler: enterController.health,
  },
];
