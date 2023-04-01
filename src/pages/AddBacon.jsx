import React from 'react';
import ModalWindow from "../components/UI/ModalWindow/ModalWindow.jsx";
import SearchOptions from "../components/SearchOptions.jsx";

// Окно для воода даных и просмотра результата в модальном окне
const AddBacon = () => {
    return (
        <div className="content">
            <ModalWindow/>
            <SearchOptions/>
        </div>
    );
};

export default AddBacon;