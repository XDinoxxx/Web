const RequestRepository = require("../repositories/requests");

class RequestService{
    async create(client_id, petsitter_id, service_type, start_time, end_time, animal_id){
        return await RequestRepository.create(client_id, petsitter_id, service_type, start_time, end_time, animal_id);
    }
}

module.exports = new RequestService();