'use strict';

var fn = require('lodash/uniqWith');

module.exports = function uniqWith() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
