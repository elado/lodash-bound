'use strict';

var fn = require('lodash/overSome');

module.exports = function overSome() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
