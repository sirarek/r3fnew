import React from 'react';
import {useThree} from "@react-three/fiber";
import {Html} from "@react-three/drei";
import {Button} from "@mui/material";

function SaveAsScreenshotButton(props) {


    function handleClick() {
        window.postMessage('create screenshot');
    }

    return (
        <Button className={"screen-shot-save"} onClick={handleClick} type={"button"}>Save as a screenshot</Button>

    );
}

export default SaveAsScreenshotButton;