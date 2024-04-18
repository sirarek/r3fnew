import {
    Divider,
    Drawer
} from "@mui/material";
import React from "react";
import DimensionSection from "../components/DimensionsSection";
import ItemSelector from "../components/itemSelector";
import ScreenshotsPreview from "../components/screenshotsPreview";
import SaveAsPdf from "../components/SaveAsPdf";
import SaveAsScreenshotButton from "../components/SaveAsScreenshotButton";

const UI = props => {
    let drawerWidth = 340;
    return (
        <Drawer
            sx={{
                width: 340,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="right"
        >

            <DimensionSection/>
            <Divider/>
            <ItemSelector/>
            <Divider/>
            <SaveAsScreenshotButton/>
            <Divider/>
            <ScreenshotsPreview/>
            <SaveAsPdf/>
        </Drawer>
    )
}
export default UI;