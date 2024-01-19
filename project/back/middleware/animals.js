const {animalScheme} = require("../schemes/animals");

function validateAnimal(req,res,next){
    const {error} = animalScheme.validate(req.body);
    if(error){
        return res.status(400).json({
            error: error.details[0].message
        });
    }
    next();
}

module.exports = validateAnimal;