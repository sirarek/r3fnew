import {
    Divider,
    Drawer
} from "@mui/material";
import React from "react";
import DimensionSection from "../components/DimensionsSection";
import ItemSelector from "../components/itemSelector";
import ScreenshotsPreview from "../components/screenshotsPreview";

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
            <ScreenshotsPreview/>
        </Drawer>
    )
}
export default UI;