import { useLoader } from "@react-three/fiber";
import { useMemo } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React from "react";

const CabinetModel = (props,ref) => {
  const onClickHandler = props.onClick;
  const gltf = useLoader(GLTFLoader, "/cabinet_nomorph.glb");
  const scene = useMemo(() => gltf.scene.clone(true), []);
  return (
    <primitive
      object={scene}

      ref = {ref}
      scale={1}
      position={props.position}
      matrix={props.matrix}
      onClick={onClickHandler}
      userData={{ id: props.id }}
    />
  );
};

export default React.forwardRef(CabinetModel);
