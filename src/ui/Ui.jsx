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
                <Box sx={{width: 250}}>
                    <Typography id="input-slider" gutterBottom>
                        Width
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <ListItem key={"width"}>

                            <Grid item>

                                <TrendingFlat id="input-slider"/>
                            </Grid>
                            <Grid item xs>
                                <Slider
                                    min={1}
                                    max={25}
                                    value={width}
                                    onChange={handleSliderChange}
                                    aria-labelledby="input-slider"
                                />

                            </Grid>
                            <Grid item>
                                <Input
                                    value={width}
                                    size="small"
                                    onChange={handleInputChange}
                                    inputProps={{
                                        step: 1,
                                        min: 1,
                                        max: 25,
                                        type: 'number',
                                        'aria-labelledby': 'input-slider',
                                    }}
                                />
                            </Grid>

                        </ListItem>

                    </Grid>

                </Box>
                <Box sx={{width: 250}}>
                                    <Typography id="input-slider-height" gutterBottom>
                                        Length
                                    </Typography>
                                    <Grid container spacing={2} alignItems="center">
                                        <ListItem key={"length"}>
                
                                            <Grid item>
                
                                                <Straight/>
                                            </Grid>
                                            <Grid item xs>
                                                <Slider
                                                    min={1}
                                                    max={25}
                                                    step={1}
                                                    value={length}
                                                    onChange={(e) => updateLength(e.target.value)}
                                                    aria-labelledby="input-slider-hegiht"
                                                />
                
                                            </Grid>
                                            <Grid item>
                                                <Input
                                                    value={length}
                                                    size="small"
                                                    onChange={(e) => updateLength(e.target.value)}
                                                    inputProps={{
                                                        step: 0.1,
                                                        min: 1,
                                                        max: 5,
                                                        type: 'number',
                                                        'aria-labelledby': 'input-slider-depth',
                                                    }}
                                                />
                                            </Grid>
                
                                        </ListItem>
                
                                    </Grid>
                
                                </Box>
                <Box sx={{width: 250}}>
                    <Typography id="input-slider-height" gutterBottom>
                        Height
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <ListItem key={"height"}>

                            <Grid item>

                                <HeightIcon/>
                            </Grid>
                            <Grid item xs>
                                <Slider
                                    min={1}
                                    max={5}
                                    step={0.1}
                                    value={wallsHeight}
                                    onChange={(e) => updateWallsHeight(e.target.value)}
                                    aria-labelledby="input-slider-hegiht"
                                />

                            </Grid>
                            <Grid item>
                                <Input
                                    value={wallsHeight}
                                    size="small"
                                    onChange={(e) => updateWallsHeight(e.target.value)}
                                    inputProps={{
                                        step: 0.1,
                                        min: 1,
                                        max: 5,
                                        type: 'number',
                                        'aria-labelledby': 'input-slider-height',
                                    }}
                                />
                            </Grid>

                        </ListItem>

                    </Grid>

                </Box><Box sx={{width: 250}}>
                    <Typography id="input-slider-wall-thickness" gutterBottom>
                        Wall Thickness
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <ListItem key={"thicknes"}>

                            <Grid item>

                                <LineWeight/>
                            </Grid>
                            <Grid item xs>
                                <Slider
                                    min={0.1}
                                    max={1}
                                    step={0.1}
                                    value={thickness}
                                    onChange={(e) => updateThichkness(e.target.value)}
                                    aria-labelledby="input-slider-hegiht"
                                />

                            </Grid>
                            <Grid item>
                                <Input
                                    value={thickness}
                                    size="small"
                                    onChange={(e) => updateThichkness(e.target.value)}
                                    inputProps={{
                                        step: 0.1,
                                        min: 0.1,
                                        max: 1,
                                        type: 'number',
                                        'aria-labelledby': 'input-slider-height',
                                    }}
                                />
                            </Grid>

                        </ListItem>

                    </Grid>

                </Box>

            </List>

            <Divider/>
        </Drawer>
    )
}
export default UI;