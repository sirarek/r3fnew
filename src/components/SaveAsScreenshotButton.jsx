import React from 'react';
import {useThree} from "@react-three/fiber";
import {Html} from "@react-three/drei";
import {Button} from "@mui/material";
import {useTranslation} from "react-i18next";

function SaveAsScreenshotButton(props) {

    const {t} = useTranslation();
    function handleClick() {
        window.postMessage('create screenshot');
    }

    return (
        <Button className={"screen-shot-save"} onClick={handleClick} type={"button"}>{t("Capture Screenshot")}</Button>

    );
}

export default SaveAsScreenshotButton;