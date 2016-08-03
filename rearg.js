'use strict';

var fn = require('lodash/rearg');

module.exports = function rearg() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
