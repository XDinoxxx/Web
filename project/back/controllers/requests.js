const requestService = require("../services/request");
const validateRequest = require("../middleware/requests");

class RequestController {
    async create(req, res) {
        try {
            validateRequest(req, res, () => {
                const { client_id, petsitter_id, service_type, start_time, end_time, animal_id } = req.body;
                const request = requestService.create(client_id, petsitter_id, service_type, start_time, end_time, animal_id);
                console.log('Заявка успешно создана:', request);
            })
        } catch (error) {
            console.error('Ошибка при запросе к базе данных: ', error);
            res.status(500).json({
                error: 'Ошибка на стороне сервера',
            });
        }
    }
}

module.exports = new RequestController();