'use strict';

var fn = require('lodash/bindKey');

module.exports = function bindKey() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
