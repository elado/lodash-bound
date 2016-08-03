'use strict';

var fn = require('lodash/isMap');

module.exports = function isMap() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
