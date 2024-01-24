const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [
            true, 
            "Email Required"
        ],
    },
    username: {
        type: String,
        required: [
            true,
            "Username Required"
        ]
    },
    password: {
        type: String,
        required: [
            true,
            "Password Required"
        ]
    },
    confirm: {
        type: String,
        required: [
            true,
            "Confirm Required"
        ]
    },

}, { timestamps: true }); 

module.exports = mongoose.model('User', UserSchema); // .model() STAYS .model()

// attributeString: {
//     type: String,
// },



// attributeNum: {
//     type: Number,
// },