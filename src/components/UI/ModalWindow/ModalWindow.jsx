import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import mw from './ModalWindow.module.css'
import {setTemporaryData, setViewModalWindow} from "../../../store/modalWindow.js";
import MyLoader from "../Loader/MyLoader.jsx";
import FormatContent from "../../FormatContent";

const ModalWindow = () => {
    const dispatch = useDispatch();
    let isModal = useSelector(state => state.modal.isLoading);
    let isVieWModal = useSelector(state => state.modal.isVieWModal);
    let temporaryData = useSelector(state => state.modal.temporaryData);

    const classes = [mw.modalWindow];

    isVieWModal && classes.push(mw.active);
    if (isVieWModal && !isModal) classes.push(mw.active);

    const closeMW = () =>{
        dispatch(setViewModalWindow(false));
        dispatch(setTemporaryData({type: '', content: null}))
    };

    return (<div onClick={()=> closeMW()} className={classes.join(' ')}>
        <div onClick={e=>{e.stopPropagation()}} className={mw.modalWindowContent}>
            {isModal
                ? <div className={mw.load}><MyLoader/></div>
                : <FormatContent format={temporaryData.type?.toLocaleUpperCase()}/>}
        </div>
    </div>);

};

export default ModalWindow;