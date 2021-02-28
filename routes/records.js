const express = require('express');
const router = express.Router();
const records = require('../controllers/records');


//bütün kayıtlar
router.get('/',records.allRecords);

//id ye göre kayıt
router.get('/:id',records.getRecord);

//kayıt ekleme
router.post('/',records.newRecord);

//id ye göre güncelleme
router.patch('/:id',records.updateRecord);

//id ye göre silme
router.delete('/:id',records.deleteRecord);

module.exports = router;