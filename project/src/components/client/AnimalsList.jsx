import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AnimalsList() {
    const [animals, setAnimals] = useState([]);
    const { userId } = useParams();

    useEffect(() => {
        const fetchAnimals = async () => {
            try {
                const response = await fetch(`http://localhost:3000/client/${userId}`);
                if (response.ok) {
                    const animalsData = await response.json();
                    setAnimals(animalsData);
                } else {
                    console.error('Ошибка при получении списка животных');
                }
            } catch (error) {
                console.error('Ошибка при выполнении запроса к серверу:', error);
            }
        };

        fetchAnimals();
    }, [userId]);

    return (
        <div>
            <h2>Список животных</h2>
            <ul>
                {animals.map((animal) => (
                    <li key={animal.id}>{animal.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default AnimalsList;