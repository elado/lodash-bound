'use strict';

var fn = require('lodash/takeRight');

module.exports = function takeRight() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
