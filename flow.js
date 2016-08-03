'use strict';

var fn = require('lodash/flow');

module.exports = function flow() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
