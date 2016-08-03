'use strict';

var fn = require('lodash/zipObjectDeep');

module.exports = function zipObjectDeep() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
