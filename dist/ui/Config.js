import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import useDimensionStore from "../store/store";
import MailIcon from '@mui/icons-material/Mail';
export default function AnchorTemporaryDrawer() {
  const showConfig = useDimensionStore(state => state.showConfig);
  const setShowConfig = useDimensionStore(state => state.setShowConfig);
  const toggleDrawer = (anchor, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setShowConfig(!showConfig);
  };
  const list = anchor => /*#__PURE__*/React.createElement(Box, {
    sx: {
      width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250
    },
    role: "presentation",
    onClick: toggleDrawer(anchor, false),
    onKeyDown: toggleDrawer(anchor, false)
  }, /*#__PURE__*/React.createElement(List, null, ['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => /*#__PURE__*/React.createElement(ListItem, {
    key: text,
    disablePadding: true
  }, /*#__PURE__*/React.createElement(ListItemButton, null, /*#__PURE__*/React.createElement(ListItemIcon, null, index % 2 === 0 ? /*#__PURE__*/React.createElement(InboxIcon, null) : /*#__PURE__*/React.createElement(MailIcon, null)), /*#__PURE__*/React.createElement(ListItemText, {
    primary: text
  }))))), /*#__PURE__*/React.createElement(Divider, null));
  return /*#__PURE__*/React.createElement("div", null, ['bottom'].map(anchor => /*#__PURE__*/React.createElement(React.Fragment, {
    key: anchor
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: toggleDrawer(anchor, true)
  }, anchor), /*#__PURE__*/React.createElement(Drawer, {
    anchor: anchor,
    open: showConfig,
    onClose: toggleDrawer(anchor, false)
  }, list(anchor)))));
}