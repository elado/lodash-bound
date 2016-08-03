'use strict';

var fn = require('lodash/ary');

module.exports = function ary() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
