const router = require('express').Router();
const CountryController = require('./CountryController');

router.get('/country-and-phone', CountryController.getCountryAndPhone);

//todo: create admin only route
router.post('/populate-countries', CountryController.populateCountries);

module.exports = router;