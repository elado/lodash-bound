'use strict';

var fn = require('lodash/omitBy');

module.exports = function omitBy() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
