'use strict';

var fn = require('lodash/uniqBy');

module.exports = function uniqBy() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
