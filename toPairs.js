'use strict';

var fn = require('lodash/toPairs');

module.exports = function toPairs() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
