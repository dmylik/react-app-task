import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import mw from './ModalWindow.module.css'
import {setTemporaryData, setViewModalWindow} from "../../../store/modalWindow.js";
import MyLoader from "../Loader/MyLoader.jsx";
import FormatContent from "../../FormatContent";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const ModalWindow = () => {
    const dispatch = useDispatch();
    let isLoading = useSelector(state => state.modal.isLoading); //флаг загрузка данных
    let isVieWModal = useSelector(state => state.modal.isVieWModal); // флаг видимости модального окна
    let temporaryData = useSelector(state => state.modal.temporaryData); // данные для вывода в модальном окне
    let errorMessage = useSelector(state => state.modal.errorMessage); // данные ошибки

    const classes = [mw.modalWindow];

    isVieWModal && classes.push(mw.active);
    if (isVieWModal && !isLoading) classes.push(mw.active);

    // закрытие модального окна
    const closeMW = () =>{
        dispatch(setViewModalWindow(false));
        dispatch(setTemporaryData({type: null, content: null}))
    };

    return (<div onClick={()=> closeMW()} className={classes.join(' ')}>
        <div onClick={e=>{e.stopPropagation()}} className={mw.modalWindowContent}>
            {isLoading
                ? <div className={mw.load}><MyLoader/></div> //спинер загрузки
                :  (!!errorMessage)
                    ? <ErrorMessage text={errorMessage}/> // сообщение о ошибке
                    : <FormatContent
                        format={temporaryData.type?.toLocaleUpperCase()}
                        recipe={temporaryData.content}/> // ответ от запроса
            }
        </div>
    </div>);
};

export default ModalWindow;