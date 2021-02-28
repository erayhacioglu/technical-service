const express = require('express');
const router = express.Router();
const validation = require('../middlewares/validation');
const customer = require('../controllers/customers');

//bütün müşteriler
router.get('/',customer.allCustomers);

//id ye göre müşteri
router.get('/:id',customer.getCutomer);

//müşteri ekleme
router.post('/',customer.newCustomer);

//id ye göre güncelleme
router.patch('/:id',customer.updateCustomer);

//id ye göre silme
router.delete('/:id',customer.deleteCustomer);

module.exports = router;