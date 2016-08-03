'use strict';

var fn = require('lodash/bind');

module.exports = function bind() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
