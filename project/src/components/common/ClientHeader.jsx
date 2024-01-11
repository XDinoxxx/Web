import React from "react";
import { Link } from "react-router-dom";

function ClientHeader() {
    return (
        <header className="clientHeader">
            <div className="headerElem">
                <Link to='/client'>Профиль</Link>
            </div>
            <div className="headerElem">
                <Link to='/'>Главная</Link>
            </div>
        </header>
    );
}

export default ClientHeader;