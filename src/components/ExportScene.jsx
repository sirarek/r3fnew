import React from 'react';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';

import useDimensionStore from '../store/store';

const ExportScene = () => {


    const handleExportClick = ()=>{
        window.postMessage("export")
        // const scene = _3js.scene;
        // const exporter = new  GLTFExporter();
        // exporter.parse(scene,function (gltf){
        //     console.log(gltf);
        //     downloadJson(gltf);
        //
        // },function ( error ) {
        //
        //         console.log( 'An error happened' );
        //
        //     },
        //     options);
    }
    return (


                        <button onClick={handleExportClick}>Export</button>


    )
};

export default ExportScene;