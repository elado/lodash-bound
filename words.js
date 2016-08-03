'use strict';

var fn = require('lodash/words');

module.exports = function words() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
