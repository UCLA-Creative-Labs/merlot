module.exports = {
  hooks: {
    'pre-push': ['npm run format'].join(' && '),
  },
};
