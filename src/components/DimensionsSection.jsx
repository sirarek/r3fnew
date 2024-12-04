import useDimensionStore from "../store/store";
import {LineWeight, Straight, Straighten, SyncAlt, TrendingFlat} from "@mui/icons-material";
import HeightIcon from '@mui/icons-material/Height';

import SliderInput from "../components/SliderInput";
import {List, ListItem, ListItemIcon, ListItemText, styled} from "@mui/material";
import {useTranslation} from "react-i18next";

const DimensionSection = () => {
    const updateLength = useDimensionStore(state => state.changeY);
    const updateWidth = useDimensionStore(state => state.changeX);
    const length = useDimensionStore(state => state.floorY);
    const updateWallsHeight = useDimensionStore(state => state.changeWallsHeight);
    const updateLegHeight = useDimensionStore(state => state.changeLegHeight);
    const width = useDimensionStore(state => state.floorX);
    const wallsHeight = useDimensionStore(state => state.wallsHeight);
    const legsHeight = useDimensionStore(state => state.legHeight);
    const updateThickness = useDimensionStore((state) => state.changeThickness);
    const thickness = useDimensionStore((state) => state.thickness);
    const {t} = useTranslation();

  
    
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
    const handleLegHeightChange = (e)=>{
        updateLegHeight(e.target.value)
    }

  
    return <List>
        <ListItem key={"dimensions"} disablePadding>

            <ListItemIcon>
                <Straighten/>
            </ListItemIcon>
            <ListItemText primary={t("dimensions")}/>

        </ListItem>
        <SliderInput
            inputName={t("dim.width")}
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
            inputName={t("dim.length")}
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
            inputName={t("dim.height")}
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
            inputName={t("dim.wallThickness")}
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
        <SliderInput
            inputName={t("dim.legHeight")}
            inputValue={legsHeight}
            inputHandler={handleLegHeightChange}
            sliderHandler={handleLegHeightChange}
            inputProps={{
                step: 0.01,
                min: 0.6,
                max: 1,
                type: 'number',
                'aria-labelledby': 'input-slider-leg-height',
            }}>
            <HeightIcon/>
        </SliderInput>
    </List>
}
export default DimensionSection
