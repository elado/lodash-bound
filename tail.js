'use strict';

var fn = require('lodash/tail');

module.exports = function tail() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
