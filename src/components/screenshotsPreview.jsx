import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useDimensionStore from "../store/store";

export default function ScreenshotsPreview() {
    const screenshotList = useDimensionStore(state => state.screenShots)
    return (
        <ImageList sx={{width: 320, height: 280}} cols={3} rowHeight={164}>
            {screenshotList.map((item, index) => (
                <ImageListItem key={index}>
                    <img
//                        srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item}`}

                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>)
}
    