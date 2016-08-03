'use strict';

var fn = require('lodash/update');

module.exports = function update() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
