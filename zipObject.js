'use strict';

var fn = require('lodash/zipObject');

module.exports = function zipObject() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
