import React, {useState} from "react";
import ClientlHeader from "../common/ClientHeader";

function RequestForm(){
    const [requestData, setRequestData] = useState({
        client_id: 1,
        petsitter_id: 2,
        service_type: '',
        start_time: '', // время должно как-то составляться, удачи
        end_time: '',
        animal_id: 1, // должен быть выбор между своими животными
    });

    const handleInputChange = (e) => {
        setRequestData({ ...requestData, [e.target.name]: e.target.value });
    };

    const handleRequest = () => {
        // Реализовать добавления заявки в базу данных
        // Перенаправить пользователя на соответствующую страницу после успешного ввода
    };

    return(
        <div>
            <ClientlHeader />
            <div className="form">
                <h2>Форма заявки</h2>
                <label>
                    ID client:
                    <input type="text" name="client_id" value={requestData.client_id} onChange={handleInputChange} />
                </label>
                <label>
                    ID petsitter:
                    <input type="text" name="petsitter_id" value={requestData.petsitter_id} onChange={handleInputChange} />
                </label>
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
                <button onClick={handleRequest} className='submitButton'>Добавить</button>
            </div>
        </div>
    );
}

export default RequestForm;