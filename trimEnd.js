'use strict';

var fn = require('lodash/trimEnd');

module.exports = function trimEnd() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
