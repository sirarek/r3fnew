import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import {
  Vector3,
  Matrix4,
  Box3,
  BoxHelper,
  Plane,
  Matrix3,
  PlaneHelper,
  MeshBasicMaterial,
  QuadraticBezier,
} from "three";

const Tst =props=>{
    const ref = useRef();
    const ref2 = useRef();
    const refBox = useRef();
    const { gl } = useThree();
    const cp = new Plane(new Vector3(1,0,-0.5),
    1)
    const cp1 = new Plane(new Vector3(0.5,0,-1),
    1)
   useEffect(()=>{
    // const rotationMatrix = new Matrix4();
    // // const normal = new Vector3(0, 0, 1);
    // const normalMatrix = new Matrix3().getNormalMatrix(ref.current.matrixWorld);
    console.log(cp)
    // cp.normal.applyMatrix4(ref.current.matrixWorld).normalize();
    // cp1.normal.applyMatrix4(ref.current.matrixWorld).normalize();
    console.log(props)
    
    
  
  
  
    gl.localClippingEnabled = true;
   
  
    
      
   })
    return (
    <mesh
        ref={ref}
        rotation={props.rotation}
        position={props.position}
        onPointerDown={props.handler}
      >
        <boxGeometry args={props.geometry} ref={refBox} />
      

        <meshBasicMaterial ref={ref2}
          color={props.color ? props.color : 0xf1f1f1}
          clippingPlanes={props.ax ==="y" ? [cp]: [cp1]}
     
        />
        {props.ax && (
          <planeHelper size={10} plane={props.ax ==="y"?cp:cp1} color={0xff0000}    />
        )}

      </mesh> 
    
)}
export default Tst