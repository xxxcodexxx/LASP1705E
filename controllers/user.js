var express = require('express');
var router = express.Router();
var passport = require('passport');
const multer = require('multer');
const path = require('path');
var userData = require('../models/user');
var storages = multer.diskStorage({
            destination:(req, file, callback)=>{
                callback(null,'./upload')
            },
            filename:(req, file, callback)=>{
                callback(null, file.originalname)
            }
        })
var upload = multer({ storage:storages });
router.get("/user", userData.getAllUser);
router.get("/user/add", function (req, res) {
    res.render('addUser');
})
router.post('/user/add',upload.single('image'),userData.addUser);
router.get('/user/delete/:id',userData.deleteUser);

router.get('/user/edit/:id', userData.getUserById);
router.post('/user/edit/:id', userData.updateUser);
module.exports = router;

/* GET New Blob page. */
// router.get('/new', function(req, res) {
//     res.render('blobs/new', { title: 'Add New Blob' });
// });

module.exports = router