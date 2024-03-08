import { useRef } from "react";
import { PointLightHelper } from "three";
import { SphereGeometry, MeshBasicMaterial } from "three";
import { useHelper, Sphere } from "@react-three/drei";
const SphereLight = () => {
  return (
    <Sphere scale={0.15}>
      <meshPhysicalMaterial
        color="white"
        emissive="white"
        emissiveIntensity={6}
        toneMapped={false}
      />
    </Sphere>
  );
};
const Lights = () => {
  const pointShadowCameraRef = useRef();

  const light = useRef();
  //   useHelper(light, PointLightHelper, 0.5, "black");
  return (
    <pointLight
      intensity={1}
      position={[0, 2.2, 0]}
      ref={light}
      castShadow
      shadow-mapSize={[1024, 1024]}
      shadow-bias={-0.00002}
      shadow-normalBias={0.03}
      shadow-radius={5}
    >
      <SphereLight />
      <perspectiveCamera
        ref={pointShadowCameraRef}
        attach="shadow-camera"
        args={[90, 1, 0.1, 10]}
      />
    </pointLight>
  );
};
export default Lights;
