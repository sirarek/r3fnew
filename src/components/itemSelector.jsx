import useDimensionStore from "../store/store";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ChairIcon from '@mui/icons-material/Chair';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
const ItemSelector = props=>{
    //TODO: handle empty select
    const selectFurniture = useDimensionStore(state => state.selectFurniture)
    const selectedFurniture = useDimensionStore(state => state.selectedFurniture)
    const selectHandler = (e,n)=>{
        console.log(n)
        selectFurniture(n)
    }

    return(
        <ToggleButtonGroup
            color="primary"
            value={selectedFurniture}
            exclusive
            onChange={selectHandler}
            aria-label="Platform"
        >
            <ToggleButton value="chair">
<ChairIcon/>
            </ToggleButton>
            <ToggleButton value="cabinet_morph"><BreakfastDiningIcon/></ToggleButton>
            <ToggleButton value="prisoner"><AccessibilityNewIcon/></ToggleButton>
        </ToggleButtonGroup>

    )
}
export  default ItemSelector;
