'use strict';

var fn = require('lodash/omit');

module.exports = function omit() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
