import {
    Divider,
    Drawer,
    List,
    ListItem,
    Slider,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Grid, Input,
    Box, styled, Typography
} from "@mui/material";
import React from "react";
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/Mail';
import {LineWeight, Straight, Straighten, SyncAlt, TrendingFlat} from "@mui/icons-material";
import MuiInput from '@mui/material/Input';
import HeightIcon from '@mui/icons-material/Height';
import useDimensionStore from "../store/store";
import SliderInput from "../components/SliderInput";


const UI = props => {


    const updateLength = useDimensionStore(state => state.changeY);
    const updateWidth = useDimensionStore(state => state.changeX);
    const updateWallsHeight = useDimensionStore(state => state.changeWallsHeight);
    const length = useDimensionStore(state => state.floorY);
    const width = useDimensionStore(state => state.floorX);
    const wallsHeight = useDimensionStore(state => state.wallsHeight);
    const updateThichkness = useDimensionStore((state) => state.changeThickness);
    const thickness = useDimensionStore((state) => state.thickness);


    const Input = styled(MuiInput)`
        width: 42px;
    `;

    const handleSliderChange = (event, newValue) => {
        updateWidth(newValue);
    };
    const handleSliderChangeHeight = (event, newValue) => {
        setHeight(newValue);
    };

    const handleInputChange = (event) => {
        updateWidth(event.target.value === '' ? 1 : Number(event.target.value));
    };
    const handleInputChangeHeight = (event) => {
        setHeight(event.target.value === '' ? 1 : Number(event.target.value));
    };


    let drawerWidth = 340;
    return (
        <Drawer
            sx={{
                width: 340,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="right"
        >

            <List>
                <ListItem key={"dimensions"} disablePadding>

                    <ListItemIcon>
                        <Straighten/>
                    </ListItemIcon>
                    <ListItemText primary={"dimensions"}/>

                </ListItem>
                <SliderInput
                    inputName={"Width"}
                    inputValue={width}
                    inputHandler={updateWidth}
                    sliderHandler={handleSliderChange}
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
                    inputHandler={updateLength}
                    sliderHandler={updateLength}
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
                    inputHandler={updateWallsHeight}
                    sliderHandler={updateWallsHeight()}
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
                    inputHandler={updateThichkness}
                    sliderHandler={updateupdateThichkness}
                    inputProps={{
                        step: 0.1,
                        min: 0.1,
                        max: 1,
                        type: 'number',
                        'aria-labelledby': 'input-slider-height',
                    }}>
                    <LineWeight/>
                </SliderInput>
            </List>

            <Divider/>
        </Drawer>
    )
}
export default UI;