'use strict';

var fn = require('lodash/escapeRegExp');

module.exports = function escapeRegExp() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
