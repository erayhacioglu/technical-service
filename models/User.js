const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password : {
        type: String,
        required : true,
    },
    technicians : [
        {
            name: {
              type: String,
            },
        },
    ],
    company: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default : Date.now
    }
})

module.exports = User = mongoose.model('user', UserSchema)