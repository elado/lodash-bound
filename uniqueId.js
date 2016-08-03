'use strict';

var fn = require('lodash/uniqueId');

module.exports = function uniqueId() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
