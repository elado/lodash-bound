'use strict';

var fn = require('lodash/unzip');

module.exports = function unzip() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
