'use strict';

var fn = require('lodash/isRegExp');

module.exports = function isRegExp() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
