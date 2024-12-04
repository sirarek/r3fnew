import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useRef, useState } from "react";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};
export default function SaveFormPopUp({
  isOpen,
  closeForm,
  handleSubmit
}) {
  const projectName = useRef();
  const handleClose = () => closeForm(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/React.createElement(Box, {
    sx: style,
    display: "flex",
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(TextField, {
    inputRef: projectName,
    fullWidth: true,
    id: "outlined-basic",
    label: "Project name",
    variant: "outlined"
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: () => handleSubmit(projectName.current.value)
  }, "Save"))));
}