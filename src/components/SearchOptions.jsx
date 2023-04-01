import React, {useEffect, useState} from 'react';
import MySelect from "./UI/MySelect/MySelect.jsx";
import MyNumberInput from "./UI/MyInput/MyNumberInput.jsx";
import MyButton from "./UI/MyButton/MyButton.jsx";
import {useDispatch} from "react-redux";
import {fetchRecipe} from "../api/api.js";
import {setIsLoading, setViewModalWindow} from "../store/modalWindow.js";
import MyNavBar from "./UI/NavBar/MyNavBar.jsx";

const SearchOptions = () => {
    const dispatch = useDispatch();

    const meat = ['all-meat', 'meat-and-filler'];
    const formatList = ['json', 'text', 'html'];

    const [type, setType] = useState('all-meat');
    const [paras, setParas]= useState(0);
    const [sentences, setSentences] = useState(0);
    const [lorem, setLorem] = useState(false);
    const [format, setFormat] = useState('');

    useEffect(()=>{
        // получение данных с localStorage
        const savedBacon = JSON.parse(localStorage.getItem('bacon'));

        setType(savedBacon.type);
        setParas(savedBacon.paras);
        setSentences(savedBacon.sentences);
        setLorem(savedBacon.lorem);
        setFormat(savedBacon.format);
    }, []); //componentDidUpdate () - отрабатывет после перерисовки компонента и запрашивает данные с localStorage

    useEffect(()=>{
        // создаём объект
        const bacon = { type: type, paras: paras, sentences: sentences, lorem: lorem, format: format };
        // преобразовываем объект в строку и сохраняем в localStorage
        localStorage.setItem('bacon', JSON.stringify(bacon));
    },[type, paras, sentences, lorem, format]); // Следит за изменением параметроав и вносит изменения в localStorage

    const find = async () =>{
        dispatch(setIsLoading(true)); // установка флага загрузки (для "Спинера")
        dispatch(setViewModalWindow(true)); // открвтие модального окна
        dispatch( fetchRecipe(type, format, paras, sentences, lorem ? 1 : 0)); // Формирование запроса
    };

    // paras и sentences не могут быть установле оба
    // обнуление одного из них при изменении другого
    const parasAdd = (val) =>{
        setParas(val);
        setSentences(0);
    };

    const sentencesAdd = (val) =>{
        setParas(0);
        setSentences(val);
    };

    return (
        <div className='find'>
            <div className="find_data">
                <MyNavBar/>
                <div>
                    <h3>Set Type:</h3>
                    <MySelect val={type} array={meat} cb={setType}/>
                </div>
                <div>
                    <h3>Set Paras:</h3>
                    <MyNumberInput value={paras} calBack={parasAdd}/>
                </div>
                <div>
                    <h3>Set Sentences:</h3>
                    <MyNumberInput value={sentences} calBack={sentencesAdd}/>
                </div>
                <div>
                    <h3>Set lorem:</h3>
                    <input type="checkbox" checked={lorem} onChange={() => setLorem(!lorem)} />
                </div>
                <div>
                    <h3>Set Format:</h3>
                    <MySelect val={format}  array={formatList} cb={setFormat} def={true}/>
                </div>
                <div>
                    <MyButton  onClick={()=>find()}>Find</MyButton>
                </div>
            </div>
        </div>
    );
};

export default SearchOptions;