import useDimensionStore from "./store/store";
import Chair from "./Chair";
import React, { Suspense } from "react";
const Chairss = () => {
  const chairs = useDimensionStore(state => state.chairs);
  return chairs.map((el, i) => {
    return /*#__PURE__*/React.createElement(Suspense, null, /*#__PURE__*/React.createElement(Chair, {
      position: el.position,
      id: el.id,
      key: i,
      type: el.type
    }));
  });
};
export default Chairss;