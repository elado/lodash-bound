'use strict';

var fn = require('lodash/zip');

module.exports = function zip() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
