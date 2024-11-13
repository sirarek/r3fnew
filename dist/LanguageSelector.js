import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import i18n from "../translations/i18n.jsx";
function changeLanguage(lng) {
  i18n.changeLanguage(lng).catch(err => console.error(err));
}
export default function LanguageSelector() {
  const [language, setLanguage] = useState('');
  const handleChange = event => {
    setLanguage(event.target.value);
    console.log(event.target.value);
    changeLanguage(event.target.value);
  };
  return /*#__PURE__*/React.createElement(Box, {
    sx: {
      minWidth: 120,
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(FormControl, {
    fullWidth: true
  }, /*#__PURE__*/React.createElement(InputLabel, {
    id: "demo-simple-select-label"
  }, "Language"), /*#__PURE__*/React.createElement(Select, {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: language,
    label: "Language",
    onChange: handleChange
  }, /*#__PURE__*/React.createElement(MenuItem, {
    value: 'en'
  }, "English"), /*#__PURE__*/React.createElement(MenuItem, {
    value: 'es'
  }, "Spanish"))));
}