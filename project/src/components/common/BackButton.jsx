import React from "react";

function BackButton(){
    const goBack = () => {
        window.history.back();
    }

    return (
        <button className="linkButton" onClick={goBack}>Назад</button>
    );
}

export default BackButton;