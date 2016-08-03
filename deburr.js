'use strict';

var fn = require('lodash/deburr');

module.exports = function deburr() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
