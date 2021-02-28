const Record = require('../models/record');

//custid ye göre kayıt
const getCustidRecord = async (req,res) => {
    try{
        const result = await Record.findOne({custId:req.params.custId});
        if(result){
            res.json(result);
        }else{
            res.status(404).json({message:'Kayıt Bulunamadı'});
        }
    }catch(error){
        throw error;
    }
}

//recordNo ya göre kayıt
const getRecordNoRecord = async (req,res) => {
    try{
        const result = await Record.findOne({recordNo:req.params.recordNo});
        if(result){
            res.json(result);
        }else{
            res.status(404).json({message:'Kayıt Bulunamadı'});
        }    
    }catch(error){
        throw error;
    }
}

module.exports = {
    getCustidRecord,
    getRecordNoRecord
}