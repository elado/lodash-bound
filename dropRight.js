'use strict';

var fn = require('lodash/dropRight');

module.exports = function dropRight() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
