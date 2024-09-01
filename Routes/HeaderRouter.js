const express = require('express');
const router = express.Router();

const Headerdetails = require('../Controller/HeaderController');

router.get('/',Headerdetails.getHeaderdetails);
router.post('/',Headerdetails.createServiceDetails);
router.get('/:headerid',Headerdetails.getSelectedHeaderdetails);

module.exports=router;