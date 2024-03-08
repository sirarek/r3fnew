import React, {useEffect} from 'react';
import {useThree} from "@react-three/fiber";
import {USDZExporter} from "three/examples/jsm/exporters/USDZExporter";

function ArComponent(props) {


    const gl_scene = useThree(state => state.scene);
    console.log(gl_scene)
    useEffect(() => {
        async function usdz() {



        const exporter = new USDZExporter();
        const arr = await exporter.parse(gl_scene);
        const blob = new Blob( [ arr ], { type: 'application/octet-stream' } );
            console.log('arr')
        console.log(arr)
            const link = document.getElementById( 'link' );
            link.href = URL.createObjectURL( blob );


        }
        usdz();
    }, []);
    return (
<></>
    );
}

export default ArComponent;