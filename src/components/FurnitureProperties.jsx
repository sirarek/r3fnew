import { Html } from "@react-three/drei"
import {useRef,useState, useLayoutEffect} from "react"
import useDimensionStore from "../store/store"
const FurnitureProperties = ({id,changeWidthHandler,data}) =>{

	const closeHandler =useDimensionStore(state =>state.clickChair)
	const updateItemDimensions = useDimensionStore(state=>state.updateItemDimensions)
	const htmlRef = useRef();
	const ref = useRef();
	 // const [currentDimension, setCurrentDimension] = useState({
    // depth: 1,
    // width: 1,
    // height: 1,
  // });



	const handleClickOutside = (event) => {
		if (htmlRef.current && !htmlRef.current.contains(event.target)) {
			closeHandler("");
		}
	};
	const currentChair = useDimensionStore(state=>state.getActiveChair)
const ac = currentChair()
let currentDimension = {...ac.dimensions, ...{ depth: 1,
    width: 1,
    height: 1,
}}
	useLayoutEffect(() => {
		console.log("hyh");
	console.log('content of id',id)
		console.log("ac",ac)

		if(data.morphTargetInfluences){
			console.log("if")
		  currentDimension = {
        ...{ depth: 1,
    width: 1,
    height: 1,
},
        width: data.morphTargetInfluences[data.morphTargetDictionary["width"]],
        height: data.morphTargetInfluences[data.morphTargetDictionary["height"]],
        depth: data.morphTargetInfluences[data.morphTargetDictionary["depth"]],

      };
		}else{
			console.log("else")
			  currentDimension = {
        ...{ depth: 1,
    width: 1,
    height: 1,
},
        depth: data.scale.z,
        width: data.scale.x,
        height: data.scale.y,
      };		}
		window.addEventListener("click", handleClickOutside);
		return () => {
			window.removeEventListener("click", handleClickOutside);
		};
	}, [data]);
	return(
		<Html position={[0, 4, 0]} className="text-id"  ref={htmlRef}>
		<div id="close-button" onClick={()=>{closeHandler("")}}>X</div>
		<label htmlFor="width"> width
		<input ref={ref} className="width-input"id={id} type={"number"} max={5} defaultValue={ac.dimensions.width||currentDimension.width}  onChange={(e)=>changeWidthHandler(e,'width')} />
		</label>  
		<label htmlFor="height"> height
		<input className="width-input"id={id} type={"number"} max={5}  defaultValue={ac.dimensions.height||currentDimension.height}  onChange={(e)=>changeWidthHandler(e,'height')} />
		</label>  <label htmlFor="width"> depth

		<input className="width-input"id={id+"depth"} type={"number"} max={5}  defaultValue={ac.dimensions.depth||currentDimension.depth} onChange={(e)=>changeWidthHandler(e,'depth')} />
		</label>
		{/*{id.toString().slice(0, 4)}*/}
		</Html>

	)
}

export default FurnitureProperties
