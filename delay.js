'use strict';

var fn = require('lodash/delay');

module.exports = function delay() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
