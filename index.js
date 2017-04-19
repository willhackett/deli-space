'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var deliSpace = function deliSpace(filler, divider) {
  for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  return rest.map(function (f) {
    return Array(parseInt(f, 0)).fill(filler).join('');
  }).join(divider);
};

exports.default = deliSpace;
