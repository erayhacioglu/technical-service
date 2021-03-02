const mongoose = require('mongoose');

const DB = async () => {
    try{
        await mongoose.connect(process.env.CONNECTION_URI,{useNewUrlParser:true, useUnifiedTopology:true,useFindAndModify:true,useCreateIndex:true});
        console.log('Db Connected...');
    }catch(err){
        console.error('Db connection error ' + err);
    }
}

module.exports = DB;

        