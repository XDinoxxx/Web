const Joi = require("joi");

const AnimalScheme = Joi.object({
    name: Joi.string().required(),
    type: Joi.string().required(),
    breed: Joi.string().required(),
    age: Joi.number().integer().min(1).required(),
    user_id: Joi.number().integer().required(),
});

module.exports = AnimalScheme;