const AnimalRepository = require("../repositories/animals");

class AnimalService{
    async create(name, type, breed, age, user_id) {
        return await AnimalRepository.create(name, type, breed, age, user_id);
    }

    async list(userId) {
        return await AnimalRepository.list(userId);
    }
}

module.exports = new AnimalService();