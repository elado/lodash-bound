'use strict';

var fn = require('lodash/capitalize');

module.exports = function capitalize() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
