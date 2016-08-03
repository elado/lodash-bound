'use strict';

var fn = require('lodash/join');

module.exports = function join() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
