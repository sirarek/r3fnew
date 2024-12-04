import { useRef } from "react";
import { PointLightHelper } from "three";
import { SphereGeometry, MeshBasicMaterial } from "three";
import { useHelper, Sphere } from "@react-three/drei";
const SphereLight = () => {
  return /*#__PURE__*/React.createElement(Sphere, {
    scale: 0.15
  }, /*#__PURE__*/React.createElement("meshPhysicalMaterial", {
    color: "white",
    emissive: "white",
    emissiveIntensity: 6,
    toneMapped: false
  }));
};
const Lights = () => {
  const pointShadowCameraRef = useRef();
  const light = useRef();
  //   useHelper(light, PointLightHelper, 0.5, "black");
  return /*#__PURE__*/React.createElement("pointLight", {
    intensity: 1,
    position: [0, 2.2, 0],
    ref: light,
    castShadow: true,
    "shadow-mapSize": [1024, 1024],
    "shadow-bias": -0.00002,
    "shadow-normalBias": 0.03,
    "shadow-radius": 5
  }, /*#__PURE__*/React.createElement(SphereLight, null), /*#__PURE__*/React.createElement("perspectiveCamera", {
    ref: pointShadowCameraRef,
    attach: "shadow-camera",
    args: [90, 1, 0.1, 10]
  }));
};
export default Lights;