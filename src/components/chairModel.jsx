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
  useEffect(()=>{
     })
  return (
    <RigidBody ref={rBody} position={props.position} gravityScale={1} colliders="hull">
    <primitive

      ref = {ref}
      object={scene}
      scale={1}
      position={props.position}
      matrix={props.matrix}
      onClick={onClickHandler}
      userData={{ id: props.id }}
    />
    </RigidBody>
  );
});

export default ChairModel
