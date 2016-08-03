'use strict';

var fn = require('lodash/pullAll');

module.exports = function pullAll() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
