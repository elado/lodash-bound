'use strict';

var fn = require('lodash/gte');

module.exports = function gte() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
