'use strict';

var fn = require('lodash/result');

module.exports = function result() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
