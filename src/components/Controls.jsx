import DimensionsInput from "./dimensions";
import Switch from "./Switch"
import ItemSelector from "./itemSelector";
import ProjectSelector from "./ProjectSelector";
import SaveIButton from "./SaveIButton";
import SaveAsScreenshotButton from "./SaveAsScreenshotButton";
import React from "react";
import SaveAsPdf from "./SaveAsPdf";



const Controls =(props)=>{

    return <>
    <DimensionsInput handler = {props.handler}/>
        <ItemSelector/>
        <ProjectSelector/>
        <SaveIButton/>
        <SaveAsScreenshotButton/>
        <SaveAsPdf/>
        

    <Switch/>

    </>

}
export default Controls;