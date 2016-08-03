'use strict';

var fn = require('lodash/findIndex');

module.exports = function findIndex() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
