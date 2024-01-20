const Requests = require("../models/requests");

class RequestRepository{
    async create(client_id, petsitter_id, service_type, start_time, end_time, animal_id){
        return await Requests.create({
            client_id: client_id,
            petsitter_id: petsitter_id,
            service_type: service_type,
            start_time: start_time,
            end_time: end_time,
            animal_id: animal_id
        });
    }
}

module.exports = new RequestRepository();