const requestService = require("../services/request");
const validateRequest = require("../middleware/requests");
const RequestScheme = require("../schemes/requests");

class RequestController {
    async create(req, res) {
        try {
            const validationResult = RequestScheme.validate(req.body);

            if (validationResult.error) {
                return res.status(400).json({
                    error: "Введите корректные данные! ",
                });
            }

            const { client_id, petsitter_id, service_type, start_time, end_time, animal_id } = req.body;
            const request = requestService.create(client_id, petsitter_id, service_type, start_time, end_time, animal_id);
            console.log('Заявка успешно создана:', request);
            res.json({
                message: 'Заявка успешно создана',
                request,
            });
        } catch (error) {
            console.error('Ошибка при запросе к базе данных: ', error);
            res.status(500).json({
                error: 'Ошибка на стороне сервера',
            });
        }
    }
}

module.exports = new RequestController();