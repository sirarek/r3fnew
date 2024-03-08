import { useLoader } from "@react-three/fiber";
import { useEffect, useMemo}from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React from 'react';

const ChairModel =  React.forwardRef((props,ref) => {
  const onClickHandler = props.onClick;
  const gltf = useLoader(GLTFLoader, "/chair.glb");
  const scene = useMemo(() => gltf.scene.clone(true), []);
  useEffect(()=>{
    // console.log(ref)
  })
  return (
    <primitive

      ref = {ref}
      object={scene}
      scale={1}
      position={props.position}
      matrix={props.matrix}
      onClick={onClickHandler}
      userData={{ id: props.id }}
    />
  );
});

export default ChairModel
