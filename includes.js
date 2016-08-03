'use strict';

var fn = require('lodash/includes');

module.exports = function includes() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
