const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    fullName:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    tel:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        minlength:10,
        maxlength:14
    },
    adress:{
        type:String,
        trim:true
    }

});

const Customer = mongoose.model('Customer',CustomerSchema);

module.exports = Customer;

