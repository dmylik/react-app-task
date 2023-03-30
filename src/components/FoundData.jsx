import React from 'react';
import MyNavBar from "./UI/NavBar/MyNavBar.jsx";
import FormatContent from "./FormatContent.jsx";

const FoundData = () => {
    return (
        <div>
            <MyNavBar/>
            <FormatContent format={'JSON'}/>
            <FormatContent format={'TEXT'}/>
            <FormatContent format={'HTML'}/>
        </div>
    );
};

export default FoundData;