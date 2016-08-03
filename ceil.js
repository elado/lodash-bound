'use strict';

var fn = require('lodash/ceil');

module.exports = function ceil() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
