'use strict';

var fn = require('lodash/findLastIndex');

module.exports = function findLastIndex() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
