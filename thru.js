'use strict';

var fn = require('lodash/thru');

module.exports = function thru() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
