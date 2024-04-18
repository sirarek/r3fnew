import logo from "./logo.svg";
import "./App.css";
import React, { useRef, useState, useContext, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Floor from "./components/floor";

// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Wall from "./components/wall";
import Lights from "./components/Lights";
import * as THREE from "three";
import DimensionsInput from "./components/dimensions";
import Slider from "./components/slider";
import { Cone, OrbitControls, PivotControls,Text } from "@react-three/drei";
import useDimensionStore from "./store/store";
import { Vector3, Quaternion } from "three";
import ChairModel from "./components/chairModel";
import Room from "./Room";
import Controls from "./components/Controls";
import Chair from "./Chair";
import Chairss from "./Chairss";
const log=(c)=>{
  console.log(c)

}
function App() {
  let toBeAdd = true
  const c = useRef();
  const msh = useRef();
  let curMtrx;
  
  
  const [floorDimensions, setFloorDimensions] = useState({ x: 5, y: 5 });
  
  const [isConeOnFloor, setIsConeOnFloor] = useState([]);
  const [acitvePivot, setActivePivot] = useState(false);
  // const chairs = useDimensionStore((state)=>state.chairs); 
   const addChair = useDimensionStore(state=>state.addChair);
  // const setClickChair = useDimensionStore(state=>state.clickChair)

  // const [clickedChair,setClickedChair] = useState(null)
  const updateChairs = useDimensionStore(state=>state.updateChairs);
  const [background, setBackground] = useState("white");
  // const [deactivatedOrbitControls, setDeactivatedOrbitControls] = useState(false);
  // const [chairs,addChair] = useState([])
  let current = new Vector3();
  
  const addConeHandler = (e) => {
    e.stopPropagation();
     log(e.point)
    console.log("adding chair")
    addChair({position:e.point, id:crypto.randomUUID()})
  }
  
  const floorX = useDimensionStore((state) => state.floorX);
  const floorY = useDimensionStore((state) => state.floorY);
  const wallsRestriction = useDimensionStore((state) => state.wallsResrticrion);
  
  const min = new Vector3(-floorX/2,0,-floorY/2)
  const max = new Vector3(floorX/2,0,floorY/2)
  const   _tmp = new Vector3();


  // useEffect(()=>{
  //   log(clickedChair)
  // },[clickedChair])
  // useEffect(()=>{
  //   log("chairs")
  //   log(chairs)
  // },[chairs])

  // const chairOnClick = (d)=>{
  //   d.stopPropagation();
  //   //setActivePivot(true)
  //   // console.log(chairs);
  //   setClickedChair(d.eventObject.userData.id)
  //   // console.log("xxxx",d);
    
  //   // console.log( "chair",d.eventObject.userData.id)
  //   // console.log(c)
    
  // }

  return (
    <>
      
      <Controls handler={setFloorDimensions}/>
      <Slider />
      <Canvas
        style={{ background: `#${background.toString(16)}` }}
        onKeyDown={(e) => { return e.code == "Escape" ? setActivePivot(false) : false}} 
        tabIndex={0}
        camera={{
          fov: 75,
          aspect: window.innerWidth / window.innerHeight,
          near: 0.01,
          far: 10000,
          position: [0, -10, 0],
        }}
      >

        <Room 
          addConeHandler={addConeHandler}>
  
            
          </Room>
                       <Chairss/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
{/* 
        {chairs.map((el, i) => {
          // console.log(chairs);
     
          // console.log( `el props id ${el.props.id} clicked chair ${clickedChair}`)
           if(el.id === clickedChair) {
          //   console.log("#########")
          //   console.log(el)
            // console.log("######")
          
          return (
            <PivotControls
              fixed = {true}
              ref={c}
              key={i}
              scale={100}
              matrix= {el.matrix}
              autoTransform={el.id === clickedChair}
              visible={el.id === clickedChair}
              activeAxes={[true, false, true]}
              anchor={[el.position.x, 0, el.position.y]}
              onDragEnd={()=>{
               // updateChairs({id:el.id, position:current,matrix:curMtrx})
                           }}

              //  onDragEnd={() => {console.log(c.current.matrix.elements);
                

              //   const pos =  new Vector3();
               
              //   pos.set(c.current.matrix.elements[12],0,c.current.matrix.elements[14])
              //   let updatedProps = {...el.props,pos:pos}
              
              // console.log(updatedProps);


           
              // updateChairs({...el,props:updatedProps})
              // console.log("***");
              // // console.log(updatedProps)

                
              //   console.log(chairs)
              
              //                 console.log("***");
                
              // }}
              onDrag={(m,dl,w,dw) => {
                // console.log(m)
                
                // log(el)
                current.set(m.elements[12],0,m.elements[14]);
                // console.log(m.elements[12] ,m.elements[14]);
                if (!wallsRestriction) {
                  if (
                    m.elements[12] > floorX / 2 ||
                    m.elements[14] > floorY / 2 ||
                    m.elements[12] < -(floorX / 2) ||
                    m.elements[14] < -floorY / 2
                  ) {
                    setBackground(0xff1231);

                    return;
                  } else {
                    setBackground(0xffffff);
                  }
                } else if (wallsRestriction) {
                  const x = _tmp
                    .set(m.elements[12], 0, m.elements[14])
                    .clamp(min, max);
                  m.setPosition(x);
                  c.current.matrix.copy(m);

                  
                }
                curMtrx = m.elements
                console.log(curMtrx)
              }}

            
            
            >
              <Text color="black"  anchorY="top-baseline">
            {(el.id === clickedChair).toString()}
              <Chair position={el.position}chairOnClick  id ={el.id} />
            </Text>
            </PivotControls>)
           }else{
            return (<>
              <Chair position={el.position} id ={el.id} />
     </>)
           }
          ;
        // }else{
        //   return <Chair chairOnClick = {chairOnClick} id ={el.id} position = {el.position}/>
        // }})
        })} */}
        <OrbitControls
          makeDefault
          maxPolarAngle={Math.PI / 2}
          target={[0, 1, 0]}
          // enabled={!deactivatedOrbitControls}
        />
        <Lights />
      </Canvas>
    </>
  );
}
export default App;



//pivot contrlos - matrix, current
// not store position in store, use memo instead
