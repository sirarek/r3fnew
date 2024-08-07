import { useHelper } from "@react-three/drei";
import useDimensionStore from "../store/store";
import { useRef,useLayoutEffect} from "react";
import { BoxHelper } from "three";
export default  function Collider({ children, type = "aabb"}) {
	 const coliders = useDimensionStore((state)=>state.coliders);
	 const addColider = useDimensionStore((state)=>state.addColider);
	 const removeColider = useDimensionStore((state)=>state.removeColider);

	const colliderGroup = useRef();
	useLayoutEffect(() => {
		const collider = { colliderGroup: colliderGroup.current, type };
		addColider(collider)
		
		// return () => removeColider(collider);
	}, []);

	useHelper(colliderGroup, BoxHelper, "cyan");

	return <group ref={colliderGroup}>{children}</group>;
}
