'use strict';

var fn = require('lodash/bindAll');

module.exports = function bindAll() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
