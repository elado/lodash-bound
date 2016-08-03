'use strict';

var fn = require('lodash/drop');

module.exports = function drop() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
