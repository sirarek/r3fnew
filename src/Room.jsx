import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {useFrame, useThree} from "@react-three/fiber";
import Floor from "./components/floor";
import Wall from "./components/wall";
import useDimensionStore from "./store/store";
import {
    Vector3,
    Plane,
    PlaneHelper,
} from "three";
import Collider from "./components/Coliders";
import {getProject} from "./db/db";
import {GLTFExporter} from "three/examples/jsm/exporters/GLTFExporter";
import {type} from "@testing-library/user-event/dist/type";
import Movable from "./components/Movable";
// import {useLoaderData} from "react-router-dom";

const Room = ({floorDimensions}) => {
    const wallsHeight = useDimensionStore((state) => state.wallsHeight);
    const floorX = Number(useDimensionStore((state) => state.floorX));
    const floorY = Number(useDimensionStore((state) => state.floorY));
    const thickness = Number(useDimensionStore((state) => state.thickness));
    const chairs = useDimensionStore((state) => state.chairs);
    const addChair = useDimensionStore((state) => state.addChair);
    const selectedFurniture = useDimensionStore(
        (state) => state.selectedFurniture,
    );
    const angle = Math.asin(
        floorX / Math.sqrt(Math.pow(floorX, 2) + Math.pow(floorY, 2)),
    );
    const v3 = new Vector3(1, 0, 0).applyAxisAngle(new Vector3(0, 1, 0), angle);
    const plane = new Plane(v3, 0);

    const wallsRestriction = useDimensionStore((state) => state.wallsResrticrion);
    const setFromdb = useDimensionStore(state => state.setFromDb)

    // const data = useLoaderData();

    // console.log(data);

    const helper = new PlaneHelper(plane, wallsRestriction ? 100 : 0);
    const [showWall,setShowWall] = useState([100,100,100,100])  // const [showWall,setShowWall] = useState([100,100,100,100])
    const addConeHandler = (e) => {
        e.stopPropagation();

        console.log("adding chair");

        chairs.length < 1 &&
            addChair({
                position: e.point.toArray(),
                id: Math.random(),
                type: selectedFurniture,
                dimensions: {},
            });
    };
    const returnX = ()=>{
        return floorX
    }
    const {scene, gl, camera,} = useThree();
    const threeState = useThree(state => state.get);
    let cam = camera.position.x;
    const wall1 = useRef();
    const wall2 = useRef();
    const wall3 = useRef();
    const wall4 = useRef();

     useFrame((_) => {
           // console.log()
           wall1.current.visible = camera.position.x > wall1.current.position.x;
           wall2.current.visible = camera.position.x < wall2.current.position.x;
           wall3.current.visible = camera.position.z < -wall3.current.position.y;
           wall4.current.visible = camera.position.z > -wall4.current.position.y;
         });
     useEffect(() => {
           // if (data){
           //       console.log(data)
            
           //           setFromdb(JSON.parse(data.data))
           //     }
           // console.log(angle);
           if (!wallsRestriction) {
                 scene.children = scene.children.filter((el) => el.type != "PlaneHelper");
               } else {
                     scene.children = scene.children.filter((el) => el.type != "PlaneHelper");
                
                         
                   }
           // console.log(scene)
         }, [wallsRestriction, angle]);
    console.log(floorX)
    const addScreenshot = useDimensionStore(state => state.addScreenshot)
    const sendScreenshot = () => {
        const x = threeState();
        console.log("####debug###")

        console.log(returnX())
        console.log("####debug###")
        const screenshotObject = {
            id: crypto.randomUUID(),
            src: "",
            w:"",
            l:""




        }

        gl.render(scene, camera);


        const xgl = x.gl;
        x.setSizeOverride(500, 500, 1);




        xgl.render(x.scene, x.camera);

        const {height,width} =scene.children.find(g=>g.name ==="room").children[0]["geometry"]["parameters"]




        const screenshot = xgl.domElement.toDataURL('image/png');
        screenshotObject["src"] = screenshot;
        screenshotObject["w"] = width;
        screenshotObject["l"] = height;

        addScreenshot(screenshotObject)
        x.setSizeOverride(window.haxyPaxy.w,window.haxyPaxy.h)

        window.postMessage({screenshotData: screenshot});
    }

    useEffect(
        () => window.addEventListener("message", (e) => {

            if (e.data === 'create screenshot') {

                sendScreenshot();
            }
            if (e.data === 'export') {
                const exporter = new  GLTFExporter();

                exporter.parse(scene,function (gltf){
                    console.log(gltf);
                    const link = document.createElement( 'a' );
                    link.style.display = 'none';
                    document.body.appendChild( link ); // Firefox workaround, see #6594

                    function save( blob, filename ) {

                        link.href = URL.createObjectURL( blob );
                        link.download = filename;
                        link.click();

                        // URL.revokeObjectURL( url ); breaks Firefox...

                    }
                    save(new Blob([gltf],{type:"application/octet-stream"}),'scen.glb');


                },function ( error ) {

                    console.log( 'An error happened' );

                },
                    {binary:true})


            }

        })
        , []);
    return (
        <group name={"room"}
        // rotation={[-Math.PI / 2, 0, 0]}
        onClick={(e) => {
            console.log(e);
        }}
        >
        {/* <group rotation={[-Math.PI / 2, 0, -Math.PI / 4]}> */}
        <Floor data={floorDimensions} handler={addConeHandler}/>
        {/* <Movable>
           <mesh castShadow receiveShadow position={[2, 1, 0.5]}>
          <boxGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        
            </Movable>*/}
        <Collider>
        <mesh position={[1,0,0.5]}>
        <boxGeometry args={[1,1,1]}/>
        </mesh>

        </Collider>
        <Wall
        window={true}
        // handler={addConeHandler}
        key={1}
        ref={wall1}
        geometry={[wallsHeight, floorY + thickness * 2, thickness]}
        // position={[-floorX / 2 - thickness / 2, 0, wallsHeight / 2]}
        position={[-floorX / 2,wallsHeight/2,0]}
        rotation={[Math.PI/2, -Math.PI/2, 0]}
        plane={plane}
        />
        <Wall
        window={true}
        plane={plane}
        ref={wall2}
        // handler={addConeHandler}
        key={2}
        geometry={[wallsHeight, floorY + thickness * 2, thickness]}
        position={[floorX / 2,wallsHeight/2,0]}
        rotation={[Math.PI/2, Math.PI/2, 0]}
        ax={"x"}
        />

        <Wall
        plane={plane}
        ref={wall3}
        // handler={addConeHandler}
        key={3}
        geometry={[floorX + thickness * 2, wallsHeight, thickness]}
        position={[0,wallsHeight/2,floorX/2]}
        rotation={[0,  0 , 0]}
        />
        <Wall
        plane={plane}
        ref={wall4}
        // handler={addConeHandler}
        key={4}
        geometry={[floorX + thickness * 2, wallsHeight, thickness]}
        position={[0,wallsHeight/2,-floorY/2]}
        rotation={[0,0, 0]}
        ax={"y"}
        ></Wall>
        </group>
    );
};
export default Room;

export async function loader({params}) {
 
    const result = await getProject(params.projId);

    if (result) {
        return result[0]
    }

    return null
}
