'use strict';

var fn = require('lodash/toPath');

module.exports = function toPath() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
