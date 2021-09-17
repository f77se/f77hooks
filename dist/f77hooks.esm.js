import { useState } from 'react';

function useToggle(defaultValue) {
  var _useState = useState(defaultValue || false),
      value = _useState[0],
      setValue = _useState[1];

  function toggleValue(value) {
    setValue(function (currentValue) {
      return typeof value === 'boolean' ? value : !currentValue;
    });
  }

  return [value, toggleValue];
}

export { useToggle };
//# sourceMappingURL=f77hooks.esm.js.map
