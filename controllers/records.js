const Record = require('../models/record');

//tüm kayıtlar
const allRecords = async (req,res) => {
    try{
        const result = await Record.find();
        if(result){
            res.json(result);
        }else{
            res.status(404).json({message:'Kayıt Bulunmamaktadır'});
        }
    }catch(error){
        throw error;
    }
}

//id ye göre kayıt
const getRecord = async (req,res) => {
    try{
        const result = await Record.findById({_id:req.params.id});
        if(result){
            res.json(result);
        }else{
            res.status(404).json({message:'Kayıt Bulunamadı'});
        }
    }catch(error){
        throw error;
    }
}

//kayıt ekleme
const newRecord = async (req,res) => {
    try{
        const aNewRecord = new Record({
            recordNo:req.body.recordNo,
            custId:req.body.custId,
            deviceType:req.body.deviceType,
            deviceBrandModel:req.body.deviceBrandModel,
            deviceSeriesNo:req.body.deviceSeriesNo,
            deviceWarrant:req.body.deviceWarrant,
            faultInfo:req.body.faultInfo,
            accessories:req.body.accessories,
            serviceOfficer:req.body.serviceOfficer,
            deviceStatus:req.body.deviceStatus,
            doneTransaciton:req.body.doneTransaciton,
            totalPrice:req.body.totalPrice
        });
        const result = await aNewRecord.save();
        if(result){
            res.json(result);
        }else{
            res.status(400).json({message:'Kayıt Oluşturulamadı'});
        }
    }catch(error){
        throw error;
    }
}

//id ye göre güncelleme
const updateRecord = async (req,res) => {
    try{
        const result = await Record.findByIdAndUpdate({_id:req.params.id},req.body,{new:true,useFindAndModify:false});
        if(result){
            res.json(result);
        }else{
            res.status(404).json({message:'Kayıt güncellenemedi'});
        }
    }catch(error){
        throw error;
    }
}

//id ye göre silme
const deleteRecord = async (req,res) => {
    try{
        const result = await Record.findByIdAndDelete({_id:req.params.id});
        if(result){
            res.status(200).json({message:'Kayıt Silindi'});
        }else{
            res.status(404).json({message:'Kayıt Silinemedi'});
        }
    }catch(error){
        throw error;
    }
}



module.exports = {
    allRecords,
    getRecord,
    newRecord,
    updateRecord,
    deleteRecord
}