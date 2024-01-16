import React from "react";
import { Link } from "react-router-dom";

function GeneralHeader() {
    return (
        <header className="generalHeader">
            <div className="headerLink">
                <Link to='/'>
                    <button className="linkButton">Главная</button>
                </Link>
            </div>
            <div className="headerButton">
                <Link to="/login">
                    <button className="linkButton"> Вход </button>
                </Link>
                <Link to="/registration">
                    <button className="linkButton">Регистрация </button>
                </Link>
            </div>
        </header>
    );
}

export default GeneralHeader;