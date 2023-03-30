import React from 'react';
import clInput from './MyInput.module.css'

const MyNumberInput = ({value, calBack}) => {
    return (
        <input className={clInput.myInput}
            type="Number"
            min={0}
            max={50}
            value={value}
            onChange={e => calBack(e.target.value)}/>
    );
};

export default MyNumberInput;


