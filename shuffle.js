'use strict';

var fn = require('lodash/shuffle');

module.exports = function shuffle() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
