import React from 'react';
import clSelect from './MySelect.module.css'

const MySelect = ({val, array, cb, def=false}) => {
    return (
            <select className={clSelect.MySelect} value={val} onChange={e=> cb(e.target.value)}>
                {def && <option value=''>-</option>}
                {array.map((one, idx)=>
                    <option
                        value={one}
                        key={one+idx}>{one}
                    </option>)}
            </select>
    );
};

export default MySelect;