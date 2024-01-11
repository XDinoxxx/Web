import React, { useState } from "react";
import ClientHeader from "../common/ClientHeader";

function AnimalForm() {
    const [animalData, setAnimalData] = useState({
        name: '',
        type: '',
        breed: '',
        age: '',
        user_id: 1, // должно быть таким же какой вошёл пользователь
    });

    const handleInputChange = (e) => {
        setAnimalData({ ...animalData, [e.target.name]: e.target.value });
    };

    const handleAnimal = () => {
        // Реализовать добавления животного в базу данных
        // Перенаправить пользователя на соответствующую страницу после успешного ввода
    };

    return (
        <div>
            <ClientHeader />
            <div className="form">
                <h2>Форма животного</h2>
                <label>
                    Логин:
                    <input type="text" name="name" value={animalData.name} onChange={handleInputChange} />
                </label>
                <label>
                    Тип животного:
                    <input type="text" name="type" value={animalData.type} onChange={handleInputChange} />
                </label>
                <label>
                    Порода:
                    <input type="text" name="breed" value={animalData.breed} onChange={handleInputChange} />
                </label>
                <label>
                    Возраст:
                    <input type="text" name="age" value={animalData.age} onChange={handleInputChange} />
                </label>
                <button onClick={handleAnimal} className='submitButton'>Добавить</button>
            </div>
        </div>
    );
}

export default AnimalForm;