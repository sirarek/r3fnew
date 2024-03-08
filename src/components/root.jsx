import * as THREE from 'three';
import {extend,createRoot,events} from "@react-three/fiber";
import App from "../App";
import {Environment} from "@react-three/drei";
import Mline from "./MLine";
import Room from "../Room";
import Chairss from "../Chairss";
import CameraControl from "./CameraContro";
import Lights from "./Lights";
import Postprocessing from "./Postprocessing";
import React from "react";
import {XR} from "@react-three/xr";
import SaveAsScreenshotButton from "./SaveAsScreenshotButton";

extend(THREE);
const so = {
    width: null,
    height: null,
};
export function create3DCanvas() {
    const canvas = document.createElement('canvas');
    const root = createRoot(canvas);

    function extracted(size,dpr) {
        if (size.width < 1 || size.height < 1) return null;
        root.configure({size: {width: size.width, height: size.height}, events, camera: {position: [0, 0, 50]}});
        const r3fState = root.render(
            <XR>
                <color attach="background" args={["gray"]}/>
                <Environment preset="apartment"/>
                <Mline/>
                <Room/>
                <Chairss/>
                {/* <TestBox></TestBox> */}
                <CameraControl/>

                <Lights/>

                <Postprocessing/>
                {/*<ARComponent/>*/}
            </XR>
        );
        return r3fState;
    }

    const r3fState = extracted({});

    const injectCanvas = wrapper =>
    {
        if (!wrapper) return;

        wrapper.appendChild(canvas);
        const observer = new ResizeObserver(el=>{
            const {width, height}= el[0]["contentRect"];

            console.log(el);
            root.configure({size: {width: width, height: height}});
            console.log(`window width: ${window.innerWidth} width from observer ${width} height: ${window.innerHeight} height from observer ${height}`)

            }
        );



        root.configure({size: {width: wrapper.clientWidth, height: wrapper.clientHeight}})

        observer.observe(wrapper);
    };

    const stateData  = extracted({width:1,height:1});
        stateData.setState(
        {
            setSizeOverride(width, height, dpr) {
                so.width = width;
                so.height = height;
                extracted({ width, height, dpr });
            },resetSizeOverride() {
                so.width = null;
                so.height = null}}
    )
    return {
        injectCanvas,
        r3fState,
    }
}
