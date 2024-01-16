import React from "react";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";

function PetsitterHeader() {
    return (
        <header className="petsitterHeader">
            <div className="headerElem">
                <Link to='/'>
                    <button className="linkButton">Главная</button>
                </Link>
            </div>
            <div>
                <BackButton />
            </div>
        </header>
    );
}

export default PetsitterHeader;