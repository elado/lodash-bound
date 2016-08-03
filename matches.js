'use strict';

var fn = require('lodash/matches');

module.exports = function matches() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
