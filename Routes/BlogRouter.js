const express = require('express');
const router = express.Router();

const Blogdetails = require('../Controller/BlogController');

router.get('/',Blogdetails.getBlogdetails);
router.post('/',Blogdetails.createBlogDetails);
router.post('/imageupload',Blogdetails.imageUpload);
router.get('/:blogid',Blogdetails.getSelectedBlogdetails);

module.exports=router;