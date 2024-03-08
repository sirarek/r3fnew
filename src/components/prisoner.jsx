import { useLoader } from "@react-three/fiber";
import { useEffect, useMemo}from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React from 'react';



const PrisonerModel = React.forwardRef((props, ref) => {
  const onClickHandler = props.onClick;
  const gltf = useLoader(GLTFLoader, "/hipek.glb");

  // Configure shadow properties for the model
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true; // Enable casting shadows
      child.receiveShadow = true; // Enable receiving shadows
    }
  });

  const scene = useMemo(() => gltf.scene.clone(true), []);

  useEffect(() => {
    // console.log(ref)
  }, []);

  return (
    <primitive
      castShadow={true}
      ref={ref}
      object={scene}
      scale={1}
      position={props.position}
      matrix={props.matrix}
      onClick={onClickHandler}
      userData={{ id: props.id }}
    />
  );
});

export default PrisonerModel;

