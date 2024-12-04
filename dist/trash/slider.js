import useDimensionStore from "../store/store";
const Slider = props => {
  const updateX = useDimensionStore(state => state.changeX);
  const updateY = useDimensionStore(state => state.changeY);
  const updateWallsHeight = useDimensionStore(state => state.changeWallsHeight);
  const x = useDimensionStore(state => state.floorX);
  const y = useDimensionStore(state => state.floorY);
  const wallsHeight = useDimensionStore(state => state.wallsHeight);
  const updateThichkness = useDimensionStore(state => state.changeThickness);
  const thickness = useDimensionStore(state => state.thickness);
  return /*#__PURE__*/React.createElement("div", {
    className: "slider"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "x"
  }, "X"), /*#__PURE__*/React.createElement("input", {
    id: "x",
    type: "range",
    min: "1",
    max: "100",
    value: x,
    onChange: e => updateX(e.target.value)
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "y"
  }, "Y"), /*#__PURE__*/React.createElement("input", {
    id: "y",
    type: "range",
    min: "1",
    max: "100",
    value: y,
    onChange: e => updateY(e.target.value)
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "y"
  }, "wallsHeight"), /*#__PURE__*/React.createElement("input", {
    id: "y",
    type: "range",
    min: "1",
    max: "4",
    step: 0.1,
    value: wallsHeight,
    onChange: e => updateWallsHeight(e.target.value)
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "thickness"
  }, " wall thickness"), /*#__PURE__*/React.createElement("input", {
    id: "thickness",
    type: "range",
    min: "0.01",
    max: "1",
    step: 0.1,
    value: thickness,
    onChange: e => updateThichkness(e.target.value)
  }));
};
export default Slider;