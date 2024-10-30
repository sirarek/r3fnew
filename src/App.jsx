import React, {useRef, useState, useContext, useEffect, useMemo, useLayoutEffect} from "react";
import {VRButton, ARButton, XR, Controllers, Hands} from '@react-three/xr'
import PdfView from "./components/Pdfviewe";
import AnchorTemporaryDrawer from "./ui/Config";
import UI from "./ui/Ui";
import MessageHandler from "./utils/helper";
import {useLoaderData} from "react-router-dom";
import {getProject} from "./db/db";
import useDimensionStore from "./store/store";

function App({injectCanvas}) {
    
    const setFromdb = useDimensionStore(state => state.setFromDb)
    const data =useLoaderData()
       useEffect(() => {

        if (data){
                  console.log(data)

                      setFromdb(JSON.parse(data.data))
                }
            }, []);
    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
        <div>
        {/*<a id="link" rel="ar" href="" download="asset.usdz">*/}
        {/*    <img id="button" width="100" src="files/arkit.png"/>*/}
        {/*</a>*/}
        <UI/>
        {/*<AnchorTemporaryDrawer></AnchorTemporaryDrawer>*/}
        <PdfView width={800}/>
        {/*<ARButton/>*/}
        </div>
        <div style={{width: '100%', position: 'relative', height: "100%"}} ref={injectCanvas}/>
        </div>
    );
}

export default App;

export async function loader({params}) {

    const result = await getProject(params.projId);

    if (result) {
        return result[0]
    }

    return null
}

