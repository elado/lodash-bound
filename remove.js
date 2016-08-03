'use strict';

var fn = require('lodash/remove');

module.exports = function remove() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
