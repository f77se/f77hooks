'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

function useToggle(defaultValue) {
  var _useState = react.useState(defaultValue || false),
      value = _useState[0],
      setValue = _useState[1];

  function toggleValue(value) {
    setValue(function (currentValue) {
      return typeof value === 'boolean' ? value : !currentValue;
    });
  }

  return [value, toggleValue];
}

exports.useToggle = useToggle;
//# sourceMappingURL=f77hooks.cjs.development.js.map
