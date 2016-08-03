'use strict';

var fn = require('lodash/findLastKey');

module.exports = function findLastKey() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
