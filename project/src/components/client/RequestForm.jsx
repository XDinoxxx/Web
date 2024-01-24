import React, { useState } from "react";
import ClientHeader from "../common/ClientHeader";
import { useNavigate, useParams } from "react-router";

function RequestForm() {
    const { userId } = useParams();
    const navigate = useNavigate();

    const [requestData, setRequestData] = useState({
        client_id: userId,
        petsitter_id: '',
        service_type: '',
        start_time: '', // время должно как-то составляться, удачи
        end_time: '',
        animal_id: 1, // должен быть выбор между своими животными
    });

    const handleInputChange = (e) => {
        setRequestData({ ...requestData, [e.target.name]: e.target.value });
    };

    const handleRequest = async () => {
        try {
            const response = await fetch(`http://localhost:3000/client/${userId}/requestform`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });
            if (response.ok) {
                const result = response.json();
                console.log("Вы успешно создали заявку", result);
                navigate(`/client/${userId}`);
            } else {
                const errorData = await response.json();
                console.error('Ошибка добавления:', errorData.message);
                document.querySelector(".error-message").innerText = errorData.error;
            }
        } catch (error) {
            console.log("Произошла ошибка при добавлении заявки!");
        }
    };

    return (
        <div>
            <ClientHeader />
            <div className="form">
                <h2>Форма заявки</h2>
                <label>
                    Тип услуги:
                    <input type="text" name="service_type" value={requestData.service_type} onChange={handleInputChange} />
                </label>
                <label>
                    Время начало:
                    <input type="text" name="start_time" value={requestData.start_time} onChange={handleInputChange} />
                </label>
                <label>
                    Время окончания:
                    <input type="text" name="end_time" value={requestData.end_time} onChange={handleInputChange} />
                </label>
                <label>
                    Какое животное:
                    <input type="text" name="animal_id" value={requestData.animal_id} onChange={handleInputChange} />
                </label>
                <span className="error-message"></span>
                <button onClick={handleRequest} className='submitButton'>Добавить</button>
            </div>
        </div>
    );
}

export default RequestForm;