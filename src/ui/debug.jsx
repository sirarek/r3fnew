import useDimensionStore from "../store/store";

export default function DebugButton(){

	const coliders = useDimensionStore(state=>state.coliders);

	return(

		<button type="button" onClick={()=>console.log(coliders)}> Debug button</button>
	)


}
