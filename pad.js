'use strict';

var fn = require('lodash/pad');

module.exports = function pad() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
