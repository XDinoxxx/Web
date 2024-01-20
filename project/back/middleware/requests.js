const {requestScheme } = require("../schemes/requests");

function validateRequest(req,res,next){
    const {error} = requestScheme.validate(req.body);
    if(error){
        return res.status(400).json({
            error: error.details[0].message
        });
    }
    next();
}

module.exports = validateRequest;