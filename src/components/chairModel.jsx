import { useLoader } from "@react-three/fiber";
import { useEffect, useMemo, useRef}from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React from 'react';
import {RigidBody} from "@react-three/rapier";
import {a} from "@react-spring/three";

const ChairModel =  React.forwardRef((props,ref) => {
  const onClickHandler = props.onClick;
  const gltf = useLoader(GLTFLoader, "/chair.glb");
  const scene = useMemo(() => gltf.scene.clone(true), []);
  const rBody = useRef();
  console.log("afterrrrrrrr")
  console.log(props.position)
  console.log("afterrrrrrrr")
  useEffect(()=>{
    console.log("###")
    console.log(props.position)

    console.log("###")
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
