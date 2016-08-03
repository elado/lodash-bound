'use strict';

var fn = require('lodash/findKey');

module.exports = function findKey() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
