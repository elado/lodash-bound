'use strict';

var fn = require('lodash/chunk');

module.exports = function chunk() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
