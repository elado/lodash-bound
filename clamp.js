'use strict';

var fn = require('lodash/clamp');

module.exports = function clamp() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
