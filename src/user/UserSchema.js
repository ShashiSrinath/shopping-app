const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        max: 1024
    },
    password: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    firstName: {
        type: String,
        required: true,
        max: 255
    },
    lastName: {
        type: String,
        required: true,
        max: 255
    },
    address: {
        line1: {
            type: String,
            required: true,
            max: 1024
        },
        line2: {
            type: String,
            max: 1024
        },
        line3: {
            type: String,
            max: 1024
        },
        line4: {
            type: String,
            max: 1024
        }
    },
    country: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        unique: true,
        required: true,
        min: 4,
        max: 20
    },

    signupDate: {
        type: Date,
        default: Date.now
    },
    cart: [{
        type: Schema.Types.ObjectID,
        ref: 'Item'
    }],

    orders: [{
        type: Schema.Types.ObjectID,
        ref: 'Order'
    }],

    listings: [{
        type: Schema.Types.ObjectID,
        ref: 'Listing'
    }]

});

const User = mongoose.model('User', UserSchema);

module.exports = User;