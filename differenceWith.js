'use strict';

var fn = require('lodash/differenceWith');

module.exports = function differenceWith() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
