import React from "react";
import { Link } from "react-router-dom";

function PetsitterHeader() {
    return (
        <header className="petsitterHeader">
            <div className="headerElem">
                <Link to='/petsitter'>Профиль</Link>
            </div>
            <div className="headerElem">
                <Link to='/'>Главная</Link>
            </div>
        </header>
    );
}

export default PetsitterHeader;