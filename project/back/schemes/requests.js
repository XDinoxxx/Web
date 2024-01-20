const Joi = require("joi");

const RequestScheme = Joi.object({
    client_id: Joi.number().integer().required(),
    petsitter_id: Joi.number().integer().required(),
    service_type: Joi.string().required(),
    start_time: Joi.date().required(),
    end_time: Joi.date().min(Joi.ref('start_time')).required(),
    animal_id: Joi.number().integer().required(),
});

module.exports = RequestScheme;