import React from 'react';
import {Link} from "react-router-dom";
import clNB from './MyNavBar.module.css'

const MyNavBar = () => { // компонент с ссылками на страницы
    return (
        <div className={clNB.navbar}>
            <div className={clNB.navbar_link}>
                <Link to="/search"><h2>Add</h2></Link>
            </div>
            <div className={clNB.navbar_link}>
                <Link to="/data"><h2>Found</h2></Link>
            </div>
        </div>
    );
};

export default MyNavBar;