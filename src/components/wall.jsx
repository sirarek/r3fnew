import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useLayoutEffect } from "react";
import { Geometry, Base, Subtraction, Addition } from "@react-three/csg";
import Door from "./Door";

import {
  Vector3,
  BoxGeometry,
  Matrix4,
  Box3,
  BoxHelper,
  Plane,
  Matrix3,
  PlaneHelper,
  MeshBasicMaterial,
  // QuadraticBezier,
  DoubleSide,
  CylinderGeometry,
  BackSide,
  FrontSide,
} from "three";
import React from "react";
import useDimensionStore from "../store/store";
const door = new BoxGeometry();
const Window = (props) => (
  <Subtraction {...props}>
    <Geometry>
      <Base geometry={door} />
      <Subtraction geometry={door} scale={[0.05, 1, 1]} />
      <Subtraction geometry={door} scale={[1, 0.05, 1]} />
    </Geometry>
  </Subtraction>
);

const Wall = (props, ref) => {
  const wallsRestriction = useDimensionStore((state) => state.wallsResrticrion);
  const wallthcikness = useDimensionStore((state) => state.thickness);
  // const ref = useRef();
  const ref2 = useRef();
  const refBox = useRef();
  const refBox1 = useRef();
  const door = new BoxGeometry();
  const bar = new BoxGeometry();
  const { scene, camera } = useThree();
  let cam = camera.position.x;

  // useFrame(_=> {
  //   // console.log()
  //       if (cam != _.camera.position.x){
  //         cam = _.camera.position.x
  //         let obj ={
  //           x:cam,
  //           y:camera.position.y,
  //           z:camera.position.z
  //
  //         }
  //         console.log(obj)
  //         console.log(ref.current.position)
  //
  //       }
  //     }
  // )

  // const cp = new Plane(new Vector3(0.5, 0, -0.5), 0);
  // const ph = new PlaneHelper(cp,10)
  const x = props.position[0] > 0 ? -1 : 1;
  useLayoutEffect(() => console.log(x), [x]);
  return (
    <group ref={ref} position={props.position}>
      <mesh
        receiveShadow
        rotation={props.rotation}
        // position={props.position}
        onPointerDown={props.handler}
      >
        {props.window ? (
          <>
            <Geometry>
              <Base>
                <boxGeometry args={props.geometry} ref={refBox} />
                <Window />
              </Base>
              <Subtraction
                geometry={door}
                scale={[2.25, 1, wallthcikness]}
                position={[0.12 * x, 0, 0]}
              />
            </Geometry>
            <Door
              geo={[2.25, 1, wallthcikness / 4]}
              position={[0.12 * x, 0, 0]}
            />
          </>
        ) : (
          <boxGeometry args={props.geometry} ref={refBox} />
        )}
        <meshStandardMaterial
          ref={ref2}
          color={props.color ? props.color : 0xf1f1f1}
        />
      </mesh>
    </group>
  );
};
export default React.forwardRef(Wall);

// cone.quaternion.setFromUnitVectors(
//   new THREE.Vector3(0, 1, 0),
//   intersects[0].normal
//     .clone()
//     .transformDirection(intersects[0].object.matrixWorld)
// );
