'use strict';

var fn = require('lodash/stubFalse');

module.exports = function stubFalse() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
