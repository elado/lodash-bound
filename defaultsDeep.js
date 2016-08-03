'use strict';

var fn = require('lodash/defaultsDeep');

module.exports = function defaultsDeep() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
