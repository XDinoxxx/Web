const Animals = require("../models/animals");

class AnimalRepository {
    async create(name, type, breed, age, user_id) {
        return Animals.create({
            name: name,
            type: type,
            breed: breed,
            age: age,
            user_id: user_id,
        })
    }

    async list(userId) {
        return await Animals.findAll({
            where: { user_id: userId }
        });
    }
}

module.exports = new AnimalRepository();