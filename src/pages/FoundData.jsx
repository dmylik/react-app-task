import React from 'react';
import MyNavBar from "../components/UI/NavBar/MyNavBar.jsx";
import FormatContent from "../components/FormatContent.jsx";
import {useSelector} from "react-redux";

// Компонент по выводу полученых данных от запросов
const FoundData = () => {
    const arrayFormat = [...useSelector(state => state.bacon.formatDataSet)];

    const recipe = {
        HTML: useSelector((state => state.bacon.recipeHTML)),
        TEXT: useSelector((state => state.bacon.recipeTEXT)),
        JSON: useSelector((state => state.bacon.recipeJSON)),

    };

    return (
        <div>
            <MyNavBar/>
            {arrayFormat.map((one)=> <FormatContent
                recipe={recipe[`${one}`]}
                format={one}
                key={`key_${one}`}
            /> )}
        </div>);
};

export default FoundData;