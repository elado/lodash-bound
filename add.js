'use strict';

var fn = require('lodash/add');

module.exports = function add() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
