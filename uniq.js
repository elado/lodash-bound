var fn = require('lodash/uniq');

module.exports = function uniq() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
