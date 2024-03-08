import { CameraControls } from "@react-three/drei";
import React, { useRef, useEffect, useMemo } from "react";
import { useThree } from "@react-three/fiber";

import { debounce } from "throttle-debounce";

import useDimensionStore from "../store/store";
import { Vector3, Quaternion, Box3, Sphere } from "three";

const CameraControl = (props) => {
  const ctrls = useRef();
  const isCameraControlsActive = useDimensionStore(
    (state) => state.cameraControlsAcitve
  );
  const floorX = useDimensionStore((state) => state.floorX);
  const wallsHeight = useDimensionStore((state) => state.wallsHeight);
  const floorY = useDimensionStore((state) => state.floorY);
  const roomsize = useDimensionStore((state) => state.roomi);
  
 
  const size = useThree((state) => state.size);

  const fitRoom = useMemo(
    () =>
    
      ctrls.current
        ? debounce(300  , () => {
            const sphere = new Sphere();
            const min = new Vector3(-floorX / 2, 0, -floorY / 2);
            const max = new Vector3(floorX / 2, 0, floorY / 2);
            
            const d = new Box3(min,max);
            d.getBoundingSphere(sphere);

            ctrls.current.fitToSphere(sphere, true);
            ctrls.current.setTarget(0, wallsHeight / 2, 0, true);
          })
        : () => {},
    [ctrls.current]
  );

  useEffect(() => {

    fitRoom(floorX,floorY);
    

  }, [fitRoom,size,size,floorX,floorY,wallsHeight]);

  return (
    <CameraControls
      ref={ctrls}
      enabled={isCameraControlsActive}
      makeDefault
      maxPolarAngle={Math.PI / 2}
      target={[0, 1, 0]}
    />
  );
};
export default CameraControl;
