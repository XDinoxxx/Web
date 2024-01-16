import React from "react";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";

function ClientHeader() {
    return (
        <header className="clientHeader">
            <div className="headerElem">
                <Link to='/'>
                    <button className="linkButton">Главная</button>
                </Link>
            </div>
            <div className="headerElem">
                <BackButton />
            </div>
        </header>
    );
}

export default ClientHeader;