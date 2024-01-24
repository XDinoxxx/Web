import React, { useState } from "react";
import ClientHeader from "../common/ClientHeader";
import { useNavigate, useParams } from "react-router";

function AnimalForm() {
    const navigate = useNavigate();
    const { userId } = useParams();
    const [animalData, setAnimalData] = useState({
        name: '',
        type: '',
        breed: '',
        age: '',
        user_id: userId,
    });

    const handleInputChange = (e) => {
        setAnimalData({ ...animalData, [e.target.name]: e.target.value });
    };

    const handleAnimal = async () => {
        try {
            const response = await fetch(`http://localhost:3000/client/${userId}/animalform`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(animalData),
            });
            if (response.ok) {
                const result = response.json();
                console.log("Вы успешно добавили животное", result);
                navigate(`/client/${userId}`);
            } else {
                const errorData = await response.json();
                console.error('Ошибка добавления:', errorData.message);
                document.querySelector(".error-message").innerText = errorData.error;
            }
        } catch (error) {
            console.log("Произошла ошибка при добавлении животного!");
        }
    };

    return (
        <div>
            <ClientHeader />
            <div className="form">
                <h2>Форма животного {userId}</h2>
                <label>
                    Имя:
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
                <span className="error-message"></span>
                <button onClick={handleAnimal} className='submitButton'>Добавить</button>
            </div>
        </div>
    );
}

export default AnimalForm;