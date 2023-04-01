import {addRecipe, setFormatData} from "../store/baconReducer.js";
import {setIsLoading, setTemporaryData} from "../store/modalWindow.js";
import {formatURL} from "./formalURL.js";
import {setErrorMessage} from "../store/modalWindow";
import {addFormatDataSet} from "../store/baconReducer";

export const fetchRecipe  = (type, format, paras, sentences, lorem) => {
    const URL = formatURL(type, format, paras, sentences, lorem); // формирование URL c параметрами

    return function (dispatch) {
        dispatch(setFormatData(format));
            fetch(URL)
                .then(response => {
                    if (format !== 'text' && format !== 'html') //ответ в виде text не привести из формата JSON (Ошибка)
                        return response.json(); // JSON
                    return response.text(); // TEXT и HTML
                })
                .then(data => {
                    dispatch(setTemporaryData({type: format, content: data})); //сохрание во временные данные, для вывода в модальном окне
                    dispatch(addRecipe(data)); // сохранение данных
                    dispatch(addFormatDataSet(format)); // добавление формата в коллекцию
                })
                // .then(()=>{dispatch(setIsLoading(false));})
                .catch((e) => {
                    dispatch(setErrorMessage(e.message)); // сохранение ответа ошибки
                    console.dir(e.message)
                })
                .finally(() => {
                    dispatch(setIsLoading(false)); // завершение работ "спинера"
                })


    };
};