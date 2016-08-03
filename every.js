'use strict';

var fn = require('lodash/every');

module.exports = function every() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
