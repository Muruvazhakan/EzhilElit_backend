const express = require('express');
const router =express();

const userRoute = require('../Controller/userController');

router.post('/',userRoute.findUser);
router.post('/login',userRoute.loginUser);
router.post('/signin',userRoute.signIn);

module.exports=router;
