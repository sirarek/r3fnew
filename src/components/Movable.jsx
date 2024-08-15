import {useRef} from "react"
import useDimensionStore from "../store/store";
import {testBox3Collision} from "../detection"
import * as THREE from "three";
import { PivotControls } from "@react-three/drei";

export default function Movable({children,...props}){
	const nextQuat = new THREE.Quaternion();
	const nextPos = new THREE.Vector3();
	const nextScale = new THREE.Vector3();
	const objBbox = new THREE.Box3();
	const coliderBox = new THREE.Box3();
	const obj = useRef();
	const matrix = useRef(new THREE.Matrix4());
	const mtv = new THREE.Vector3();
	const coliders = useDimensionStore(state=>state.coliders);

	const onDrag = m=>{
		m.decompose(nextPos,nextQuat,nextScale);
		matrix.current.copy(m);
		obj.current.updateWorldMatrix(true,true);
		objBbox.setFromObject(obj.current);

		let colisionDetected = false;
		mtv.set(0, 0, 0);

		for (const colider of coliders){
			coliderBox.setFromObject(colider.colliderGroup);
			const colision ={};
			if(testBox3Collision(coliderBox,objBbox,colision)){
				colisionDetected = true;
				mtv.add(colision.nEnter.multiplyScalar(colision.penetration));
			}
		}
		if(colisionDetected){
			matrix.current.setPosition(nextPos.sub(mtv));
		}
	};







	return(
		<group {...props}>
		<PivotControls
		matrix={matrix.current}
		autoTransform={false}
		scale={1.75}

		disableRotations={false}
		activeAxes={[true,false,true]}
		depthTest={false}
		onDrag={onDrag}
		>


		<group ref={obj}>{children}</group>
		
		</PivotControls>
		</group>
	)
}
