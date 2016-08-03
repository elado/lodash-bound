'use strict';

var fn = require('lodash/overArgs');

module.exports = function overArgs() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
