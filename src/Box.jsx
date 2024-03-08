import { Vector3, Matrix4, Box3,BoxHelper, Plane,PlaneHelper, MeshBasicMaterial,} from "three";
import { useEffect, useRef } from "react";
import { useThree } from '@react-three/fiber'

const TestBox = props=>{
const ref = useRef();
const { gl } = useThree();
gl.localClippingEnabled = true
// cone.position.copy(intersects[0].point.clone());
// console.log('before ' + JSON.stringify(cone.quaternion));
// cone.quaternion.setFromUnitVectors(
//   new THREE.Vector3(0, 1, 0),
//   intersects[0].normal
//     .clone()
//     .transformDirection(intersects[0].object.matrixWorld)
// );
useEffect(()=>{
    console.log(gl)
})
    return (
    <mesh ref={ref} >

    <boxGeometry args={[5,5,5]} />
    <meshBasicMaterial clippingPlanes={[new Plane(new Vector3(1,0,0),0)]} clipIntersection={true}></meshBasicMaterial>
    <planeHelper size={10} plane= { new Plane(new Vector3(1,0,0 ),0)}></planeHelper>
    </mesh>
    )
}
export default TestBox;