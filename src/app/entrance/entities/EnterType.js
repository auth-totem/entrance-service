module.exports = () => ({
  find: (type) => {
    switch (type) {
      case 'college':
        return 1;
      case 'class':
        return 2;
      case 'library':
        return 3;
      default:
        return null;
    }
  },
});
