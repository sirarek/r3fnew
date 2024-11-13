import useDimensionStore from "../store/store";
import { Button } from "@mui/material";
const SaveAsPdf = props => {
  const setShowPdf = useDimensionStore(state => state.setShowPdf);
  return /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    onClick: () => setShowPdf(true)
  }, "Save as PDF ");
};
export default SaveAsPdf;