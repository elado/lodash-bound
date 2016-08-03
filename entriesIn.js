'use strict';

var fn = require('lodash/entriesIn');

module.exports = function entriesIn() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
