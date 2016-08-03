'use strict';

var fn = require('lodash/toPlainObject');

module.exports = function toPlainObject() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
