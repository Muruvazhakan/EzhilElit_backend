const express = require('express');
const router = express.Router();

const getMenuData = require('../Controller/menuController'); 


router.get('/menuData',getMenuData.getMenuData);
router.get('/userData',getMenuData.getUserData);

module.exports = router;