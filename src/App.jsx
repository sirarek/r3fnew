import React, {useRef, useState, useContext, useEffect, useMemo, useLayoutEffect} from "react";
import {VRButton, ARButton, XR, Controllers, Hands} from '@react-three/xr'
import PdfView from "./components/Pdfviewe";
import UI from "./ui/Ui";

function App({injectCanvas}) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
        <div>
        {/*<a id="link" rel="ar" href="" download="asset.usdz">*/}
        {/*    <img id="button" width="100" src="files/arkit.png"/>*/}
        {/*</a>*/}
        <UI/>
        <ARButton/>
        <PdfView width={800}/>
        </div>
        <div style={{width: '100%', position: 'relative', height: "100%"}} ref={injectCanvas}/>
        </div>
    );
}

export default App;

