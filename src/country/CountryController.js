const rp = require('request-promise');
const Country = require('./CountrySchema.js');

/*  @GET /country/country-and-phone
 *  ACCESS public
 *  get country list and phone codes */
const getCountryAndPhone =async (req, res) => {
    //find countries
    const countries = await Country.find().select({'name':1, 'alpha3Code':1 , 'callingCodes':1});
    res.json(countries);
};


/*  @POST /country/populateCountries
 *  ACCESS : admin
 *  populate country list */
const populateCountries = async (req, res) => {
    const countries =await rp('https://restcountries.eu/rest/v2/all');
    const countriesJson = JSON.parse(countries);
    countriesJson.forEach(country => {
        Country.create(country)
    });
    res.json(countriesJson);
};



module.exports = {
    getCountryAndPhone: getCountryAndPhone,
    populateCountries: populateCountries
};

