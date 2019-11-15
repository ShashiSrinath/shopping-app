const Joi = require('@hapi/joi');
const Country = require('../country/CountrySchema');

const alphaNames = [];

const populateCountries =async () => {
    const countryCodes = await Country.find().select('alpha3Code -_id');

    countryCodes.forEach(countryCode => {
        alphaNames.push(countryCode.alpha3Code);
    });
};

const validate = async (data) => {
    if (alphaNames.length === 0) await populateCountries();

    const schema = Joi.object().keys({
        email: Joi.string().email().max(1024).required(),
        password: Joi.string().min(4).max(255).required(),
        password2: Joi.any().valid(Joi.ref('password')).required().label('confirm password')
            .messages({
                'any.only': 'passwords do not match',
            }),
        firstName: Joi.string().max(255).required(),
        lastName: Joi.string().max(255).required(),
        address: Joi.object().keys({
            line1: Joi.string().max(1024).required(),
            line2: Joi.string().max(1024),
            line3: Joi.string().max(1024),
            line4: Joi.string().max(1024),
        }).required()
            .messages({
                'object.base': 'address is invalid',
            }),
        country: Joi.any().valid(...alphaNames).required()
            .messages({
                'any.only': "Country name is not valid"
            }),
        phone: Joi.number().required()
    });

    return await schema.validate(data, {abortEarly: false});
};



module.exports = validate;
