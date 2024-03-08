import logo from "./logo.svg";
import "./App.css";
import React, {useRef, useState, useContext, useEffect, useMemo, useLayoutEffect} from "react";
import {Canvas, extend, useFrame, useThree} from "@react-three/fiber";
import Floor from "./components/floor";
import Mline from "./components/MLine";
import Postprocessing from "./components/Postprocessing";
import {debounce} from "throttle-debounce";

// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Wall from "./components/wall";
import Lights from "./components/Lights";
import {VRButton, ARButton, XR, Controllers, Hands} from '@react-three/xr'
import * as THREE from "three";
import DimensionsInput from "./components/dimensions";
import Slider from "./components/slider";
import {
    Cone,
    CameraControls,
    PivotControls,
    Text,
    Environment,
} from "@react-three/drei";
import useDimensionStore from "./store/store";
import {Vector3, Quaternion, Box3, Sphere} from "three";
import ChairModel from "./components/chairModel";
import Room from "./Room";
import Controls from "./components/Controls";
import Chair from "./Chair";
import Chairss from "./Chairss";
import CameraControl from "./components/CameraContro";

import TestBox from "./Box";
import {useLoaderData} from "react-router-dom";
import {getProject} from "./db/db";
import ARComponent from "./components/ARComponent";
import SaveAsScreenshotButton from "./components/SaveAsScreenshotButton";

const log = (c) => {
    console.log(c);
};

function App({ injectCanvas}) {

    const [floorDimensions, setFloorDimensions] = useState({x: 5, y: 5});

    const ref = useRef();

    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
            <div>
                {/*<a id="link" rel="ar" href="" download="asset.usdz">*/}
                {/*    <img id="button" width="100" src="files/arkit.png"/>*/}
                {/*</a>*/}
                <Controls handler={setFloorDimensions}/>

                <Slider/>
                <ARButton/>
                <button onClick={() => {
                    console.log(ref.current)
                }}>eeel
                </button>


            </div>

            <div style={{width: '100%', position: 'relative',height:"100%"}} ref={injectCanvas} />
        </div>
    );
}

export default App;

