'use strict';

var fn = require('lodash/before');

module.exports = function before() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
