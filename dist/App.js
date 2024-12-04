import React, { useRef, useState, useContext, useEffect, useMemo, useLayoutEffect } from "react";
import PdfView from "./components/Pdfviewe";
import UI from "./ui/Ui";
import { useLoaderData } from "react-router-dom";
import { getProject } from "./db/db";
import useDimensionStore from "./store/store";
function App({
  injectCanvas
}) {
  const setFromdb = useDimensionStore(state => state.setFromDb);
  const data = useLoaderData();
  useEffect(() => {
    if (data) {
      console.log(data);
      setFromdb(JSON.parse(data.data));
    }
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(UI, null), /*#__PURE__*/React.createElement(PdfView, {
    width: 800
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      position: 'relative',
      height: "100%"
    },
    ref: injectCanvas
  }));
}
export default App;
export async function loader({
  params
}) {
  const result = await getProject(params.projId);
  if (result) {
    return result[0];
  }
  return null;
}