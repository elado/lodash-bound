'use strict';

var fn = require('lodash/template');

module.exports = function template() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
