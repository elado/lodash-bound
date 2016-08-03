'use strict';

var fn = require('lodash/padStart');

module.exports = function padStart() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
