const validateAnimal = require("../middleware/animals");
const animalService = require("../services/animals");

class AnimalController {
    async create(req, res) {
        try {
            validateAnimal(req, res, () => {
                const { name, type, breed, age, user_id } = req.body;
                const animal = animalService.create(name, type, breed, age, user_id);
                console.log('Пользователь успешно создан:', animal);
            })
        } catch (error) {
            console.error('Ошибка при запросе к базе данных: ', error);
            res.status(500).json({
                error: 'Ошибка на стороне сервера',
            });
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