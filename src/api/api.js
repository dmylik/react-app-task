import {addRecipe, setFormatData} from "../store/baconReducer.js";
import {setIsLoading, setTemporaryData} from "../store/modalWindow.js";
import {formatURL} from "./formalURL.js";

export const fetchRecipe  = (type, format, paras, sentences, lorem) => {
    const URL = formatURL(type, format, paras, sentences, lorem);

    return function (dispatch) {
        dispatch(setFormatData(format));
        fetch(URL)
            .then(response => {
                if(format!== 'text' && format!=='html')
                    return  response.json();
                return response.text();
            })
            .then(data => {
                dispatch(setTemporaryData({type: format, content: data}));
                dispatch(addRecipe(data))})
            .then(()=>{dispatch(setIsLoading(false));})
    };
};