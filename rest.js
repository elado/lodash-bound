'use strict';

var fn = require('lodash/rest');

module.exports = function rest() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
