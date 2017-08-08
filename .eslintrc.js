module.exports = {
    "extends": "airbnb-base",
    rules: {
      'comma-dangle': 0,
      'semi': ['error', 'never'],
      'no-param-reassign': 0
    },
    globals: {
      describe: true,
      it: true,
      beforeEach: true
    }
};
