import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from "./pdf";
import useDimensionStore from '../store/store';
const PdfView = () => {
  const showPdf = useDimensionStore(state => state.showPdf);
  const setShowPdf = useDimensionStore(state => state.setShowPdf);
  const screenshots = useDimensionStore(state => state.screenShots);
  return /*#__PURE__*/React.createElement("div", {
    className: "ell",
    style: {
      display: showPdf ? "block" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "popup-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "popup"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pdf-buttons-wrapper"
  }, /*#__PURE__*/React.createElement(PDFViewer, {
    width: 500,
    height: 400
  }, /*#__PURE__*/React.createElement(MyDocument, {
    data: screenshots.map(img => img.src)
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowPdf(false)
  }, "Close")))));
};
export default PdfView;