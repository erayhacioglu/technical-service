const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const records = require('./routes/records');
const customers = require('./routes/customers');
const search = require('./routes/search');
const db = require('./config/db')();


//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//routes
app.use('/api/customers',customers);
app.use('/api/records',records);
app.use('/api/search',search);

//port settigns
const port = process.env.PORT || 5000;
app.listen(port,(err)=>{
    if(err){
        console.error('Port error ' + err);
    }
    console.log(`App listening on port ${port}`);
});