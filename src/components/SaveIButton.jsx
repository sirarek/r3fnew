import React, {useEffect} from 'react';
import useDimensionStore from "../store/store";

import {saveData} from "../db/db";

function SaveIButton(props) {
    const {
        floorX,
        floorY,
        thickness,
        chairs,
        wallsHeight
    } = useDimensionStore(  (state => ({
        floorX: state.floorX,
        floorY: state.floorY,
        thickness: state.thickness,
        chairs: state.chairs,
        wallsHeight: state.wallsHeight
    })))


    const handleClick = () => {

        saveData({floorX: floorX, floorY: floorY, thickness: thickness, wallsHeight: wallsHeight, chrs: chairs})
    }
    return (
        <button onClick={handleClick} type={"button"}>save</button>
    );
}


export default SaveIButton;