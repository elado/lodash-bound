'use strict';

var fn = require('lodash/unescape');

module.exports = function unescape() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
