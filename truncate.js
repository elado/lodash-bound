'use strict';

var fn = require('lodash/truncate');

module.exports = function truncate() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
