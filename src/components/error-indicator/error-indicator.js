import React from "react";
import './error-indicator.css';
import icon from './book.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon"/>
            <span className="boom">Упс</span>
            <span>Что-то пошло не так</span>
            <span>(Но мы обязательно разберемся в ближайшее время)</span>
        </div>
    );
};

export default ErrorIndicator;