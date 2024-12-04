import useDimensionStore from '../store/store';
import React, { useState } from 'react';
const Switch = props => {
  const wallsRestriction = useDimensionStore(state => state.wallsResrticrion);
  const setWallsRestriction = useDimensionStore(state => state.setWallRestriction);
  const handleChange = () => {
    setWallsRestriction(!wallsRestriction);
  };
  return /*#__PURE__*/React.createElement("label", null, "Walls restriction", /*#__PURE__*/React.createElement("input", {
    className: "react-switch-checkbox",
    type: "checkbox",
    checked: wallsRestriction,
    onChange: handleChange
  }), /*#__PURE__*/React.createElement("span", null, wallsRestriction ? 'ON' : 'OFF'));
};
export default Switch;