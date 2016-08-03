'use strict';

var fn = require('lodash/padEnd');

module.exports = function padEnd() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
