'use strict';

var fn = require('lodash/flatMapDeep');

module.exports = function flatMapDeep() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
