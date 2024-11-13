import { Box, Grid, Input, ListItem, Slider, Typography } from "@mui/material";
const SilderInput = ({
  children,
  inputName,
  sliderHandler,
  inputHandler,
  inputValue,
  inputProps
}) => {
  return /*#__PURE__*/React.createElement(Box, {
    sx: {
      width: 250
    }
  }, /*#__PURE__*/React.createElement(Typography, {
    id: "input-slider",
    gutterBottom: true
  }, inputName), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    spacing: 2,
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(ListItem, {
    key: "width"
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, children), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: true
  }, /*#__PURE__*/React.createElement(Slider, {
    min: inputProps.min,
    max: inputProps.max,
    step: inputProps.step,
    value: inputValue,
    onChange: sliderHandler,
    "aria-labelledby": "input-slider"
  })), /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(Input, {
    value: inputValue,
    size: "small",
    onChange: inputHandler,
    inputProps: inputProps
  })))));
};
export default SilderInput;