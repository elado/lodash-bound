'use strict';

var fn = require('lodash/parseInt');

module.exports = function parseInt() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
