'use strict';

var fn = require('lodash/cloneDeep');

module.exports = function cloneDeep() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
