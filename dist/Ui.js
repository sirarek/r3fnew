import { Divider, Drawer } from "@mui/material";
import React, { useEffect, useState } from "react";
import DimensionSection from "../components/DimensionsSection";
import ItemSelector from "../components/itemSelector";
import ScreenshotsPreview from "../components/ScreenshotsPreview";
import SaveAsPdf from "../components/SaveAsPdf";
import SaveAsScreenshotButton from "../components/SaveAsScreenshotButton";
import SaveProject from "../components/SaveProject";
import ProjectSelector from "../components/ProjectSelector";
import Pdfv2 from "../Pdf/Pdfv2";
import ExportScene from "../components/ExportScene";
import DebugButton from "./debug";
import LanguageSelector from "./LanguageSelector.jsx";
const UI = props => {
  let drawerWidth = 340;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => setWindowWidth(window.innerWidth);
  console.log(windowWidth);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return /*#__PURE__*/React.createElement(Drawer, {
    sx: {
      width: 340,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box'
      }
    },
    variant: "persistent",
    anchor: "right",
    open: windowWidth > 1028
  }, /*#__PURE__*/React.createElement(LanguageSelector, null), /*#__PURE__*/React.createElement(SaveProject, null), /*#__PURE__*/React.createElement(ProjectSelector, null), /*#__PURE__*/React.createElement(DimensionSection, null), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(ItemSelector, null), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(SaveAsScreenshotButton, null), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(ScreenshotsPreview, null), /*#__PURE__*/React.createElement(SaveAsPdf, null), /*#__PURE__*/React.createElement(ExportScene, null), /*#__PURE__*/React.createElement(Pdfv2, null), /*#__PURE__*/React.createElement(DebugButton, null));
};
export default UI;