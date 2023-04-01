import React from 'react';
import clError from './Error.module.css'

const ErrorMessage = ({text}) => {
    return (
        <div className={clError.error}>
            <div>
                <h1>Sorry. Something went wrong...</h1>
                <h2>{text}</h2>
            </div>
        </div>
    );
};

export default ErrorMessage;