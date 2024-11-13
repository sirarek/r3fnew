import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useLayoutEffect } from "react";
import { Geometry, Base, Subtraction, Addition } from "@react-three/csg";
import Door from "./Door";
import { Vector3, BoxGeometry, Matrix4, Box3, BoxHelper, Plane, Matrix3, PlaneHelper, MeshBasicMaterial,
// QuadraticBezier,
DoubleSide, CylinderGeometry, BackSide, FrontSide } from "three";
import React from "react";
import useDimensionStore from "../store/store";
import Collider from "./Coliders";
const door = new BoxGeometry();
const Window = props => /*#__PURE__*/React.createElement(Subtraction, props, /*#__PURE__*/React.createElement(Geometry, null, /*#__PURE__*/React.createElement(Base, {
  geometry: door
}), /*#__PURE__*/React.createElement(Subtraction, {
  geometry: door,
  scale: [0.05, 1, 1]
}), /*#__PURE__*/React.createElement(Subtraction, {
  geometry: door,
  scale: [1, 0.05, 1]
})));
const Wall = (props, ref) => {
  const wallsRestriction = useDimensionStore(state => state.wallsResrticrion);
  const wallthcikness = useDimensionStore(state => state.thickness);
  // const ref = useRef();
  const ref2 = useRef();
  const refBox = useRef();
  const refBox1 = useRef();
  const door = new BoxGeometry();
  const bar = new BoxGeometry();
  const {
    scene,
    camera
  } = useThree();
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
  return /*#__PURE__*/React.createElement(Collider, null, /*#__PURE__*/React.createElement("group", {
    ref: ref,
    position: props.position
  }, /*#__PURE__*/React.createElement("mesh", {
    receiveShadow: true,
    rotation: props.rotation
    // position={props.position}
    ,
    onPointerDown: props.handler
  }, props.window ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Geometry, null, /*#__PURE__*/React.createElement(Base, null, /*#__PURE__*/React.createElement("boxGeometry", {
    args: props.geometry,
    ref: refBox
  }), /*#__PURE__*/React.createElement(Window, null)), /*#__PURE__*/React.createElement(Subtraction, {
    geometry: door,
    scale: [2.25, 1, wallthcikness],
    position: [0.12 * x, 0, 0]
  })), /*#__PURE__*/React.createElement(Door, {
    geo: [2.25, 1, wallthcikness / 4],
    position: [0.12 * x, 0, 0]
  })) : /*#__PURE__*/React.createElement("boxGeometry", {
    args: props.geometry,
    ref: refBox
  }), /*#__PURE__*/React.createElement("meshStandardMaterial", {
    ref: ref2,
    color: props.color ? props.color : 0xf1f1f1
  }))));
};
export default /*#__PURE__*/React.forwardRef(Wall);

// cone.quaternion.setFromUnitVectors(
//   new THREE.Vector3(0, 1, 0),
//   intersects[0].normal
//     .clone()
//     .transformDirection(intersects[0].object.matrixWorld)
// );