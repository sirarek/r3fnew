import {
    Divider,
    Drawer
} from "@mui/material";
import React, {useEffect, useState} from "react";
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
const UI = props => {
    let drawerWidth = 340; 
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = ()=>
        setWindowWidth(window.innerWidth);  
    console.log(windowWidth)

    useEffect(()=>{
        window.addEventListener('resize', handleResize);
        return ()=>{
            window.removeEventListener('resize', handleResize)
        }
    })
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
            variant="persistent"
            anchor="right"
        open={windowWidth > 1028}
        >
    
            <SaveProject/>
            <ProjectSelector/>
            <DimensionSection/>
            <Divider/>
            <ItemSelector/>
            <Divider/>
            <SaveAsScreenshotButton/>
            <Divider/>
            <ScreenshotsPreview/>

            <SaveAsPdf/>
            <ExportScene/>
            <Pdfv2/>
        <DebugButton></DebugButton>
        </Drawer>
    )
}
export default UI;
