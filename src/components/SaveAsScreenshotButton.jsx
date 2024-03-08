import React from 'react';
import {useThree} from "@react-three/fiber";
import {Html} from "@react-three/drei";

function SaveAsScreenshotButton(props) {
    window.addEventListener('message', (m =>{
    if (m.data.hasOwnProperty('screenshotData')){
        const link = document.createElement('a')
        link.setAttribute('download', 'canvas.png')
        link.setAttribute('href', m.data.screenshotData.replace('image/png', 'image/octet-stream'))
        link.click()
    }
}))

    function handleClick() {
        window.postMessage('create screenshot');
    }

    return (
        <button className={"screen-shot-save"} onClick={handleClick} type={"button"}>Save as a screenshot</button>

    );
}

export default SaveAsScreenshotButton;