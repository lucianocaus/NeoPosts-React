const path = require('path');

module.exports = {
  hooks: path.resolve(__dirname, '../src/hooks'),
  api: path.resolve(__dirname, '../src/api'),
  components: path.resolve(__dirname, '../src/components'),
  concerns: path.resolve(__dirname, '../src/concerns'),
};
