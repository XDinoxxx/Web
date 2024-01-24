const validateAnimal = require("../middleware/animals");
const animalService = require("../services/animals");
const AnimalScheme = require("../schemes/animals");

class AnimalController {
    async create(req, res) {
        try {
            const validationResult = AnimalScheme.validate(req.body);

            if (validationResult.error) {
                return res.status(400).json({
                    error: "Введите корректные данные! ",
                });
            }

            const { name, type, breed, age, user_id } = req.body;
            const animal = await animalService.create(name, type, breed, age, user_id);
            console.log('Животное успешно создано:', animal);

            res.json({
                message: 'Животное успешно создано',
                animal,
            });
        } catch (error) {
            console.error('Ошибка при запросе к базе данных: ', error);
        }
    }
    async list(req, res) {
        const { userId } = req.params;

        try {
            const animals = await animalService.list(userId);

            res.status(200).json(animals);
        } catch (error) {
            console.error('Ошибка при запросе к базе данных: ', error);
            res.status(500).json({
                error: 'Ошибка на стороне сервера',
            });
        }
    }
}

module.exports = new AnimalController();