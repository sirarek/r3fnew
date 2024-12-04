import { useLayoutEffect, useMemo, useRef, useState } from "react";
import ChairModel from "./components/chairModel";
import { RigidBody, useFixedJoint } from "@react-three/rapier";
import useDimensionStore from "./store/store";
import { Center, PivotControls, useHelper } from "@react-three/drei";
import { Vector3, Matrix4, Box3, BoxHelper, Quaternion } from "three";
import CabinetModel from "./components/CabinetModel";
import CabinetMorphModel from "./components/CabinetMoph";
import FurnitureProperties from "./components/FurnitureProperties";
import PrisonerModel from "./components/prisoner";
function Movable({
  children,
  ...props
}) {
  const [isDragged, setIsDragged] = useState(false);
  const obj = useRef();
  const pointer = useRef();
  const [matrix] = useState(() => new Matrix4());
  const vec = new Vector3();
  const quat = new Quaternion();

  // Joint to control obj by pointer
  // PivotControls -setNextKinematicTranslation-> pointer -useFixedJoint-> obj -> children (box)
  useFixedJoint(pointer, obj, [[0, 0, 0], [0, 0, 0, 1], [0, 0, 0], [0, 0, 0, 1]]);
  return /*#__PURE__*/React.createElement("group", props, /*#__PURE__*/React.createElement(PivotControls, {
    matrix: matrix,
    scale: 1.75,
    disableRotations: false,
    activeAxes: [true, false, true],
    depthTest: false
    // When drag is over snap matrix back to the object position
    ,
    onDragEnd: () => {
      matrix.setPosition(vec.copy(obj.current?.translation()));
      setIsDragged(false);
    },
    onDrag: local => {
      pointer.current?.setNextKinematicTranslation(vec.setFromMatrixPosition(local));
      // pointer.current?.setNextKinematicRotation(
      //   quat.setFromRotationMatrix(local)
      // );
      setIsDragged(true);
    }
  }), /*#__PURE__*/React.createElement(RigidBody, {
    canSleep: false,
    type: "kinematicPosition",
    ref: pointer
  }), /*#__PURE__*/React.createElement(RigidBody
  // Change the type to fixed when not dragged
  // so that the object does not react to the impact of another object
  , {
    type: isDragged ? "dynamic" : "fixed",
    ccd: true,
    canSleep: false,
    colliders: "hull",
    enabledRotations: [false, false, false],
    ref: obj
  }, children));
}
const Chair = props => {
  const setClickedChair = useDimensionStore(state => state.clickChair);
  const ref = useRef();
  const chairRef = useRef();
  const itemRef = useRef("");
  const floorX = useDimensionStore(state => state.floorX);
  const floorY = useDimensionStore(state => state.floorY);
  const clickedChair = useDimensionStore(state => state.clickedChair);
  const [focus, setFocus] = useState(false);
  const [pos, setPos] = useState("");
  // const camHandler = useDimensionStore(
  //   (state) => state.setCameraControlsAcitve
  // );

  const updateItemDimensions = useDimensionStore(state => state.updateItemDimensions);
  const bbox = new Box3();
  const bbox1 = new Box3();
  const min = new Vector3(-floorX / 2, 0, -floorY / 2);
  const max = new Vector3(floorX / 2, 0, floorY / 2);
  const d = new Box3(min, max);
  const _tmp = new Vector3();
  let current = new Vector3();
  const chairOnClick = d => {
    d.stopPropagation();
    setClickedChair(d.eventObject.userData.id);
    console.log("elo");
  };
  const changeWidthHandler = (e, b) => {
    const mapping = {
      depth: "z",
      width: "x",
      height: "y"
    };
    const w = +e.target.value;
    const item = itemRef.current;
    updateItemDimensions(item.userData.id, {
      [b]: w
    });
    if (w < 1 || w > 5) return;
    if (item != "") {
      console.log(e);
      console.log(item);
      if (item.children[0].morphTargetInfluences != undefined) {
        const morphData = item.children[0];
        const morphAttIndex = morphData.morphTargetDictionary[b];
        item.children[0].morphTargetInfluences[morphAttIndex] = +w;
      } else {
        itemRef.current.children[0].scale[mapping[b]] = w;
        console.log(mapping[b]);
        setFocus(true);
      }
    }
  };
  const isActiveHandler = () => {
    if (focus) {
      setClickedChair("");
    }
  };
  const mtrx = useMemo(() => {
    const pos = new Vector3().fromArray(props.position).clone().clamp(min, max); // new vector3 to solve serailization

    return new Matrix4().setPosition(pos.x, pos.y, pos.z);
  }, [props.position]);
  const bnd = useRef(new Vector3());
  const matrix = useRef(mtrx);
  const isChairActive = props.id === clickedChair;
  let x;
  useLayoutEffect(() => {
    bbox.setFromObject(chairRef.current);
    bbox.getSize(bnd.current);
    bnd.current.multiplyScalar(0.5).negate().setY(0);
  }, [props]);
  useLayoutEffect(() => {
    bbox.setFromObject(chairRef.current);
    bbox.getSize(bnd.current);
    bnd.current.multiplyScalar(0.5).negate().setY(0);
    bbox1.copy(d).expandByVector(bnd.current);
    const m = matrix.current;
    const newPos = _tmp.set(m.elements[12], 0, m.elements[14]).clamp(bbox1.min, bbox1.max);
    m.setPosition(newPos);
    matrix.current.copy(m);
  }, [d]);
  // useHelper(chairRef, BoxHelper, "red")

  return (
    /*#__PURE__*/
    // <group>
    // <PivotControls
    // fixed={true}
    // // anchor={[0, 0, 0]}
    // ref={ref}
    // matrix={matrix.current}
    // activeAxes={[isChairActive, false, isChairActive]}
    // // autoTransform={props.id === clickedChair}
    // // visible={props.id === clickedChair}
    // scale={100}
    // onDrag={(m, dl, w, dw) => {
    //     // camHandler(false)
    //     // current.set(m.elements[12], 0, m.elements[14]);
    //     // const x = _tmp.set(m.elements[12], 0, m.elements[14]).clamp(min, max);
    //     // m.setPosition(x);
    //     // ref.current.matrix.copy(m)
    //     if (!matrix.current) return;
    //     bbox.setFromObject(chairRef.current)
    //     bbox.getSize(bnd.current);
    //     bnd.current.multiplyScalar(0.5).negate().setY(0);
    //     bbox1.copy(d).expandByVector(bnd.current);
    //
    //     const newPos = _tmp.set(m.elements[12], 0, m.elements[14]).clamp(bbox1.min, bbox1.max);
    //     m.setPosition(newPos);
    //     x = newPos
    //     matrix.current.copy(m);
    //     setPos(x)
    //     // curMtrx = m.elements;
    //     // console.log(curMtrx);
    // }}
    // // onDragStart={camHandler(false)}
    //
    // />
    React.createElement(Movable, null, /*#__PURE__*/React.createElement("group", {
      ref: chairRef
    }, /*#__PURE__*/React.createElement(Center, {
      disableY: true
    }, isChairActive &&
    /*#__PURE__*/
    // <Html position={[0, 2, 0]} className="text-id">
    // {/*TODO: styling size change*/}
    // <label htmlFor={props.id}>width
    // <input className="width-input"id={props.id} type={"number"} max={5} onFocus={()=>{setFocus(true)}} onBlur={isActiveHandler}  onChange={changeWidthHandler} />
    // </label>
    // {/*{props.id.toString().slice(0, 4)}*/}
    // </Html>
    React.createElement(FurnitureProperties, {
      id: props.id,
      changeWidthHandler: changeWidthHandler,
      data: itemRef.current.children[0]
    }), props.type == "chair" ? /*#__PURE__*/React.createElement(ChairModel, {
      ref: itemRef,
      onClick: chairOnClick,
      id: props.id,
      position: pos
    }) : props.type == "cabinet_morph" ? /*#__PURE__*/React.createElement(CabinetMorphModel, {
      ref: itemRef,
      onClick: chairOnClick,
      id: props.id
    }) : props.type == "prisoner" ? /*#__PURE__*/React.createElement(PrisonerModel, {
      ref: itemRef,
      onClick: chairOnClick,
      id: props.id
    }) : /*#__PURE__*/React.createElement(CabinetModel, {
      ref: itemRef,
      onClick: chairOnClick,
      id: props.id
    }))))

    // </group>
  );
};
export default Chair;