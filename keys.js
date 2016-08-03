'use strict';

var fn = require('lodash/keys');

module.exports = function keys() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
