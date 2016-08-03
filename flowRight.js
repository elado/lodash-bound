'use strict';

var fn = require('lodash/flowRight');

module.exports = function flowRight() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
