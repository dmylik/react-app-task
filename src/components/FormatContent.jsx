import React from 'react';

const FormatContent = ({format, recipe}) => {

    if(format!=='HTML') //к данным формата HTML применяется другой способ вывода данных
        return ( // вывод данных с JSON и Text
            <div>
                <h3>{format}</h3>
                {recipe?.map((one,idx) => <p key={`recipe${format}`+idx}>{one}</p>)}
            </div>
        );
    else {
        let html = recipe;
        console.log(html)
        const createMarkup = () =>  ({__html: html});
        return ( // Вывод формата HTML
            <div>
                <h3>{format}</h3>
                <div dangerouslySetInnerHTML ={createMarkup()}/>
            </div>
        );
    }
};

export default FormatContent;