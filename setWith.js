'use strict';

var fn = require('lodash/setWith');

module.exports = function setWith() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
