'use strict';

var fn = require('lodash/unzipWith');

module.exports = function unzipWith() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
