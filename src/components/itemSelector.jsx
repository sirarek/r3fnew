import useDimensionStore from "../store/store";

const ItemSelector = props=>{
    const selectFurniture = useDimensionStore(state => state.selectFurniture)
    const selectHandler = (e)=>{
    selectFurniture(e.target.value)
    }
    return(
        <select onChange={selectHandler}>
            <option value="chair">Chair</option>
            <option value="cabinet">Cabinet</option>
            <option value="cabinet_morph">Cabinet_morph</option>
        <option value="prisoner">prisoner</option>
        </select>
    )
}
export  default ItemSelector;
