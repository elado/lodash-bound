'use strict';

var fn = require('lodash/updateWith');

module.exports = function updateWith() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
