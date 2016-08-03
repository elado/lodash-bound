'use strict';

var fn = require('lodash/method');

module.exports = function method() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
