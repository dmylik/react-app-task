import React from 'react';
import {useSelector} from "react-redux";

const FormatContent = ({format}) => {
    const recipe = useSelector(state => state.bacon[`recipe${format}`]);

    if(format!=='HTML')
        return (
            <div>
                <h3>{format}</h3>
                {recipe?.map((one,idx) => <p key={`recipe${format}`+idx}>{one}</p>)}
            </div>
        );
    else {
        let html = recipe.join('<br>');
        const createMarkup = () =>  ({__html: html});
        return (
            <div>
                <h3>{format}</h3>
                <div dangerouslySetInnerHTML ={createMarkup()}/>
            </div>
        );
    }
};

export default FormatContent;