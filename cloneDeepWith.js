'use strict';

var fn = require('lodash/cloneDeepWith');

module.exports = function cloneDeepWith() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
