import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import Floor from "./components/floor";
import Wall from "./components/wall";
import { Cage } from "./components/Cage-TAqDCvxcxd";
import { Torture } from "./components/Torture Device-XVLSpgpSLd.jsx";
import useDimensionStore from "./store/store";
import { Vector3, Plane, PlaneHelper } from "three";
import Collider from "./components/Coliders";
import { getProject } from "./db/db";
import Movable from "./components/Movable";
// import { useLoaderData } from "react-router-dom";
const Room = ({
  floorDimensions
}) => {
  const wallsHeight = useDimensionStore(state => state.wallsHeight);
  const floorX = Number(useDimensionStore(state => state.floorX));
  const floorY = Number(useDimensionStore(state => state.floorY));
  const thickness = Number(useDimensionStore(state => state.thickness));
  const chairs = useDimensionStore(state => state.chairs);
  const addChair = useDimensionStore(state => state.addChair);
  const selectedFurniture = useDimensionStore(state => state.selectedFurniture);
  const angle = Math.asin(floorX / Math.sqrt(Math.pow(floorX, 2) + Math.pow(floorY, 2)));
  const v3 = new Vector3(1, 0, 0).applyAxisAngle(new Vector3(0, 1, 0), angle);
  const plane = new Plane(v3, 0);
  const wallsRestriction = useDimensionStore(state => state.wallsResrticrion);
  const setFromdb = useDimensionStore(state => state.setFromDb);

  // const data = useLoaderData();

  // console.log(data);

  const helper = new PlaneHelper(plane, wallsRestriction ? 100 : 0);
  const [showWall, setShowWall] = useState([100, 100, 100, 100]); // const [showWall,setShowWall] = useState([100,100,100,100])
  const addConeHandler = e => {
    e.stopPropagation();
    console.log("adding chair");
    chairs.length < 1 && addChair({
      position: e.point.toArray(),
      id: Math.random(),
      type: selectedFurniture,
      dimensions: {}
    });
  };
  const {
    scene,
    camera
  } = useThree();
  const wall1 = useRef();
  const wall2 = useRef();
  const wall3 = useRef();
  const wall4 = useRef();
  useFrame(_ => {
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
    if (!wallsRestriction) {
      scene.children = scene.children.filter(el => el.type != "PlaneHelper");
    } else {
      scene.children = scene.children.filter(el => el.type != "PlaneHelper");
    }
  }, [wallsRestriction, angle]);
  return /*#__PURE__*/React.createElement("group", {
    name: "room",
    onClick: e => {
      console.log(e);
    }
  }, /*#__PURE__*/React.createElement(Floor, {
    name: "floor",
    data: floorDimensions,
    handler: addConeHandler
  }), /*#__PURE__*/React.createElement(Wall, {
    window: true,
    key: 1,
    ref: wall1,
    geometry: [wallsHeight, floorY + thickness * 2, thickness],
    position: [-floorX / 2 - 0.5 * thickness, wallsHeight / 2, 0],
    rotation: [Math.PI / 2, -Math.PI / 2, 0],
    plane: plane
  }), /*#__PURE__*/React.createElement(Wall, {
    window: true,
    plane: plane,
    ref: wall2,
    key: 2,
    geometry: [wallsHeight, floorY + thickness * 2, thickness],
    position: [floorX / 2 + thickness / 2, wallsHeight / 2, 0],
    rotation: [Math.PI / 2, Math.PI / 2, 0],
    ax: "x"
  }), /*#__PURE__*/React.createElement(Wall, {
    plane: plane,
    ref: wall3,
    key: 3,
    geometry: [floorX + thickness * 2, wallsHeight, thickness],
    position: [0, wallsHeight / 2, floorX / 2 + 0.5 * thickness],
    rotation: [0, 0, 0]
  }), /*#__PURE__*/React.createElement(Wall, {
    plane: plane,
    ref: wall4,
    key: 4,
    geometry: [floorX + thickness * 2, wallsHeight, thickness],
    position: [0, wallsHeight / 2, -floorY / 2 - 0.5 * thickness],
    rotation: [0, 0, 0],
    ax: "y"
  }), /*#__PURE__*/React.createElement(Movable, null, /*#__PURE__*/React.createElement("mesh", {
    name: "test",
    castShadow: true,
    receiveShadow: true,
    position: [2, 0.5, 1]
  }, /*#__PURE__*/React.createElement("boxGeometry", null), /*#__PURE__*/React.createElement("meshStandardMaterial", {
    color: "orange"
  }))), /*#__PURE__*/React.createElement(Collider, null));
};
export default Room;
export async function loader({
  params
}) {
  const result = await getProject(params.projId);
  if (result) {
    return result[0];
  }
  return null;
}