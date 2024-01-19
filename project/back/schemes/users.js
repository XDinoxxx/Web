const Joi = require("joi");

const UserScheme = Joi.object({
    login: Joi.string().min(4).max(20).required(),
    password: Joi.string().min(4).max(50).required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().required(),
    role_id: Joi.number().integer().required(),
});

module.exports = UserScheme;