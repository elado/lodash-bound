'use strict';

var fn = require('lodash/head');

module.exports = function head() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
