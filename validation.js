//Validation
const Joi = require('@hapi/joi');


// Register Validation
const registerValidation = (data)=>{
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required()
    });
    //Lets validate the data before we a user
    return schema.validate(data);
}


const loginValidation = (data)=>{
    const schema = Joi.object({
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required()
    });
    //Lets validate the data before we a user
    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;

