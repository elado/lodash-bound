'use strict';

var fn = require('lodash/startCase');

module.exports = function startCase() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
