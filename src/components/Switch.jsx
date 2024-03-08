import useDimensionStore from '../store/store';
import React, { useState } from 'react';
const Switch = (props) => {
    const wallsRestriction = useDimensionStore((state) => state.wallsResrticrion);
    const setWallsRestriction = useDimensionStore((state) => state.setWallRestriction);



    const handleChange = () => {
        
        setWallsRestriction(!wallsRestriction);
        
    };
  
    return (
      <label>Walls restriction
        <input className='react-switch-checkbox'
          type="checkbox"
          checked={wallsRestriction}
          onChange={handleChange}
        />
        <span>{wallsRestriction ? 'ON' : 'OFF'}</span>
      </label>
    );
  };
  
  export default Switch;