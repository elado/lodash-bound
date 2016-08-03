'use strict';

var fn = require('lodash/inRange');

module.exports = function inRange() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
