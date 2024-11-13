import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import useDimensionStore from '../store/store';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey'
  }
});

// Create Document Component
const MyDocument = ({
  data
}) => {
  return /*#__PURE__*/React.createElement(Document, null, /*#__PURE__*/React.createElement(Page, {
    size: "A4",
    style: styles.page
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.section
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.header,
    fixed: true
  }, "Cela +"), data && data.map((s, i) => /*#__PURE__*/React.createElement(Image, {
    src: s,
    key: i
  })))));
};
export default MyDocument;