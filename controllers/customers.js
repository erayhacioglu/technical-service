const Customer = require('../models/customer');

//tüm müşteriler
const allCustomers = async (req,res) => {
    try {
        const result = await Customer.find();
        if(result){
            res.json(result);
        }else{
            res.status(404).json({message:'Müşteriler Bulunamadı'});
        }
    } catch (error) {
        throw error;
    }
}

//id ye göre müşteri
const getCutomer = async (req,res) => {
    try {
        const result = await Customer.findById({_id:req.params.id});
        if(result){
            res.json(result);
        }else{
            res.status(404).json({message:'Müşteri Bulunamadı'});
        }
    } catch (error) {
        throw error;
    }
}

//müşteri ekleme
const newCustomer = async (req,res) => {
    try {
        const aNewCustomer = new Customer({
            fullName:req.body.fullName,
            tel:req.body.tel,
            adress:req.body.adress
        });
        const result = await aNewCustomer.save();
        if(result){
            res.json(result);
        }else{
            res.status(400).json({message:'Kayıt Yapılamadı'});
        }
    } catch (error) {
        throw error;
    }
}

//id ye göre güncelleme
const updateCustomer = async (req,res) => {
    try {
        const updateCust = await Customer.findByIdAndUpdate({_id:req.params.id},req.body,{new:true,useFindAndModify:false});
        if(updateCust){
            res.json(updateCust);
        }else{
            res.status(400).json({message:'Müşteri Güncellenemedi'});
        }
    } catch (error) {
        throw error;
    }
}

//id ye göre silme
const deleteCustomer = async (req,res) => {
    try {
        const deleteCust = await Customer.findByIdAndDelete({_id:req.params.id});
        if(deleteCust){
            res.json({message:'Müşteri Silindi'});
        }else{
            res.status(400).json({message:'Müşteri Silinirken Hata Oluştu'});
        }
    } catch (error) {
        throw error;
    }
}


module.exports = {
    allCustomers,
    getCutomer,
    newCustomer,
    updateCustomer,
    deleteCustomer
}