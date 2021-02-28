const express = require('express');
const router = express.Router();
const search = require('../controllers/search.js');

//recordNo ya göre kayıt
router.get('/record/:recordNo',search.getRecordNoRecord);

//custid ye göre kayıt
router.get('/records/:custId',search.getCustidRecord);

module.exports = router;