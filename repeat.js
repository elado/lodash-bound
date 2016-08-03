'use strict';

var fn = require('lodash/repeat');

module.exports = function repeat() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
