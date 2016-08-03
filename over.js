'use strict';

var fn = require('lodash/over');

module.exports = function over() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
