const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecordSchema = new Schema({
    recordNo:{
        type:String,
        trim:true,
        required:true,
    },
    custId:{
        type:String,
        trim:true,
        required:true,
    },
    deviceType:{
        type:String,
        trim:true,
        required:true
    },
    deviceBrandModel:{
        type:String,
        trim:true,
        required:true
    },
    deviceSeriesNo:{
        type:String,
        trim:true,
        required:true
    },
    deviceWarrant:{
        type:String,
        trim:true,
        required:true
    },
    faultInfo:{
        type:String,
        trim:true,
        required:true
    },
    accessories:{
        type:String,
        trim:true,
        required:true
    },
    serviceOfficer:{
        type:String,
        trim:true,
        required:true
    },
    deviceStatus:{
        type:String,
        trim:true,
        required:true
    },
    doneTransaction:{
        type:String,
        trim:true
    },
    totalPrice:{
        type:Number,
        trim:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const Record = mongoose.model('Record',RecordSchema);

module.exports = Record;