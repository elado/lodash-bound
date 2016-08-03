'use strict';

var fn = require('lodash/forEach');

module.exports = function forEach() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
