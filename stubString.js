'use strict';

var fn = require('lodash/stubString');

module.exports = function stubString() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
