import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useDimensionStore from "../store/store";
import {IconButton, ImageListItemBar} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

export default function ScreenshotsPreview() {
    const screenshotList = useDimensionStore(state => state.screenShots)
    const removeScreenshots = useDimensionStore(state => state.removeFromScreenshotList)
    const handleClick = (id)=>{
        removeScreenshots(id)
    }

    return (
        <ImageList sx={{width: 320, height: 280}} cols={3} rowHeight={164}>
            {screenshotList.map((item, index) => (
                <ImageListItem key={item.id}>


                    <img 
                        //                        srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                         src={`${item.src}`}

                         loading="lazy"

                    />
                    <ImageListItemBar
                        sx={{
                            background:
                                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                        }}
                        title={item.title}
                        position="top"
                        actionIcon={
                            <IconButton
                                onClick={()=>handleClick(item.id)}
                                sx={{color: 'white'}}
                                aria-label={`star ${item.title}`}
                            >
                                <ClearIcon/>
                            </IconButton>
                        }
                        actionPosition="right"
                    />

                </ImageListItem>
            ))}
        </ImageList>)
}
    