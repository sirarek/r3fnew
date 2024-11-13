import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { sendScreenshot, handleMessageExport } from "./helpers";
import useDimensionStore from "../store/store";
export default function MessageHandler() {
  const addScreenshot = useDimensionStore(state => state.addScreenshot);
  const threeState = useThree(state => state.get);
  useEffect(() => window.addEventListener("message", e => {
    if (e.data === 'create screenshot') {
      sendScreenshot(threeState(), addScreenshot);
    }
    if (e.data === 'export') {
      handleMessageExport(threeState());
    }
  }), []);
  return /*#__PURE__*/React.createElement(React.Fragment, null);
}