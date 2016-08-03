'use strict';

var fn = require('lodash/stubObject');

module.exports = function stubObject() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
