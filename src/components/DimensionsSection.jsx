import useDimensionStore from "../store/store";
import {LineWeight, Straight, Straighten, SyncAlt, TrendingFlat} from "@mui/icons-material";
import HeightIcon from '@mui/icons-material/Height';

import SliderInput from "../components/SliderInput";
import {List, ListItem, ListItemIcon, ListItemText, styled} from "@mui/material";

const DimensionSection = () => {
    const updateLength = useDimensionStore(state => state.changeY);
    const updateWidth = useDimensionStore(state => state.changeX);
    const updateWallsHeight = useDimensionStore(state => state.changeWallsHeight);
    const length = useDimensionStore(state => state.floorY);
    const width = useDimensionStore(state => state.floorX);
    const wallsHeight = useDimensionStore(state => state.wallsHeight);
    const updateThickness = useDimensionStore((state) => state.changeThickness);
    const thickness = useDimensionStore((state) => state.thickness);


  
    
    const handleLengthChange = (e)=>{
        updateLength(e.target.value)
    }
    const handleWidthChange = (e)=>{
        updateWidth(e.target.value)
    }
    const handleThicknessChange = (e)=>{
        updateThickness(e.target.value)
    }
    const handleHeightChange = (e)=>{
        updateWallsHeight(e.target.value)
    }

  
    return (<List>
        <ListItem key={"dimensions"} disablePadding>

            <ListItemIcon>
                <Straighten/>
            </ListItemIcon>
            <ListItemText primary={"dimensions"}/>

        </ListItem>
        <SliderInput
            inputName={"Width"}
            inputValue={width}
            inputHandler={handleWidthChange}
            sliderHandler={handleWidthChange}
            inputProps={{
                step: 1,
                min: 1,
                max: 25,
                type: 'number',
                'aria-labelledby': 'input-slider',
            }}>
            <TrendingFlat id="input-slider"/>
        </SliderInput>
        <SliderInput
            inputName={"Length"}
            inputValue={length}
            inputHandler={handleLengthChange}
            sliderHandler={handleLengthChange}
            inputProps={{
                step: 1,
                min: 1,
                max: 25,
                type: 'number',
                'aria-labelledby': 'input-slider-lenght',
            }}>
            <Straight/>
        </SliderInput>
        <SliderInput
            inputName={"Height"}
            inputValue={wallsHeight}
            inputHandler={handleHeightChange}
            sliderHandler={handleHeightChange}
            inputProps={{
                step: 0.1,
                min: 1,
                max: 5,
                type: 'number',
                'aria-labelledby': 'input-slider-height',
            }}>
            <HeightIcon/>
        </SliderInput>
        <SliderInput
            inputName={"Wall Thickness"}
            inputValue={thickness}
            inputHandler={handleThicknessChange}
            sliderHandler={handleThicknessChange}
            inputProps={{
                step: 0.1,
                min: 0.1,
                max: 1,
                type: 'number',
                'aria-labelledby': 'input-slider-height',
            }}>
            <LineWeight/>
        </SliderInput>
    </List>)
}
export default DimensionSection