const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
    name: String ,
    alpha3Code: String ,
    region: String ,
    subregion: String,
    callingCodes: [],
    timezones: []
});

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;