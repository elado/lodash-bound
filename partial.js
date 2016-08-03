'use strict';

var fn = require('lodash/partial');

module.exports = function partial() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
