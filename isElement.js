'use strict';

var fn = require('lodash/isElement');

module.exports = function isElement() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
