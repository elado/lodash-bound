'use strict';

var fn = require('lodash/replace');

module.exports = function replace() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
