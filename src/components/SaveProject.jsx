import React, {useEffect, useState} from 'react';
import useDimensionStore from "../store/store";
import SaveAsIcon from '@mui/icons-material/SaveAs';
import {saveData} from "../db/db";
import {Button} from "@mui/material";
import SaveFormPopUp from "./SaveFormPopUp";

function SaveProject(props) {
    const [showForm,setShowForm ] =useState(false)
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
        
        setShowForm(true)
    }
    const handleSubmit = (_name) => {
        
        const name = _name ? _name : `project ${new Date()}`     
        saveData({name:name, floorX, floorY: floorY, thickness: thickness, wallsHeight: wallsHeight, chrs: chairs})
        setShowForm(false)
        }
    return (<> 
        <Button startIcon={<SaveAsIcon/>} onClick={ handleClick} type={"button"}></Button>
    { showForm && <SaveFormPopUp isOpen={showForm} handleSubmit={handleSubmit} closeForm ={setShowForm}/>}
    </>
    );
}


export default SaveProject;
