import DimensionsInput from "./dimensions";
import Switch from "./Switch";
import ItemSelector from "./itemSelector";
import ProjectSelector from "./ProjectSelector";
import SaveIButton from "./SaveIButton";
import SaveAsScreenshotButton from "./SaveAsScreenshotButton";
import React from "react";
import SaveAsPdf from "./SaveAsPdf";
import useDimensionStore from "../store/store";
const Controls = props => {
  const screenshots = useDimensionStore(state => state.screenShots);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DimensionsInput, {
    handler: props.handler
  }), /*#__PURE__*/React.createElement(ItemSelector, null), /*#__PURE__*/React.createElement(ProjectSelector, null), /*#__PURE__*/React.createElement(SaveIButton, null), /*#__PURE__*/React.createElement(SaveAsScreenshotButton, null), /*#__PURE__*/React.createElement(SaveAsPdf, null), /*#__PURE__*/React.createElement(Switch, null));
};
export default Controls;