'use strict';

var fn = require('lodash/curryRight');

module.exports = function curryRight() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
