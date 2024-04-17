import {Box, Grid, Input, ListItem, Slider, Typography} from "@mui/material";

const SilderInput =({children, inputName, sliderHandler,inputHandler,inputValue,inputProps})=>{
    return (<Box sx={{width: 250}}>
        <Typography id="input-slider" gutterBottom>
            {inputName}
        </Typography>
        <Grid container spacing={2} alignItems="center">
            <ListItem key={"width"}>

                <Grid item>

                   {children}
                </Grid>
                <Grid item xs>
                    <Slider
                        min={1}
                        max={25}
                        value={inputValue}
                        onChange={sliderHandler}
                        aria-labelledby="input-slider"
                    />

                </Grid>
                <Grid item>
                    <Input
                        value={inputValue}
                        size="small"
                        onChange={inputHandler}
                        inputProps={inputProps}
                    />
                </Grid>

            </ListItem>

        </Grid>

    </Box>)
}
export default SilderInput;