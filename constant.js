'use strict';

var fn = require('lodash/constant');

module.exports = function constant() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
