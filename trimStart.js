'use strict';

var fn = require('lodash/trimStart');

module.exports = function trimStart() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
