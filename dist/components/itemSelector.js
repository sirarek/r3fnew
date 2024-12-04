import useDimensionStore from "../store/store";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ChairIcon from '@mui/icons-material/Chair';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
const ItemSelector = props => {
  //TODO: handle empty select
  const selectFurniture = useDimensionStore(state => state.selectFurniture);
  const selectedFurniture = useDimensionStore(state => state.selectedFurniture);
  const selectHandler = (e, n) => {
    console.log(n);
    selectFurniture(n);
  };
  return /*#__PURE__*/React.createElement(ToggleButtonGroup, {
    color: "primary",
    value: selectedFurniture,
    exclusive: true,
    onChange: selectHandler,
    "aria-label": "Platform"
  }, /*#__PURE__*/React.createElement(ToggleButton, {
    value: "chair"
  }, /*#__PURE__*/React.createElement(ChairIcon, null)), /*#__PURE__*/React.createElement(ToggleButton, {
    value: "cabinet_morph"
  }, /*#__PURE__*/React.createElement(BreakfastDiningIcon, null)), /*#__PURE__*/React.createElement(ToggleButton, {
    value: "prisoner"
  }, /*#__PURE__*/React.createElement(AccessibilityNewIcon, null)));
};
export default ItemSelector;