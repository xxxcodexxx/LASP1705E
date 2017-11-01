var express = require('express');
var router = express.Router();
var passport = require('passport');
var multer = require('multer');
var AuthorData = require('../models/author');
var UserData = require('../models/user');
var storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'./dist/upload');
    },
    filename : function(req,file,cb){
        cb(null,file.originalname);
    }

});
var upload = multer({storage:storage});
//router.post('/author/add',AuthorData.addAuthor);
router.post('/author/upload',upload.single('file'),AuthorData.addAuthor)
//router.post('/author/upload',AuthorData.addAuthor);
//router.get('/authorForm',function(req,res){
    //res.render('authorForm');
//},UserData.getUserByIdDone);
router.get("/allAuthor",AuthorData.getAllAuthor);
//router.get("/author/:id",AuthorData.getAuthorById);
router.get("/author/add",function(req,res){
    res.render('addAuthor');
})
router.get("/author/edit/:id",AuthorData.getAuthorById);
router.get("/author/delete/:id",AuthorData.deleteAuthor);
router.post("/author/edit/:id",upload.single('file'),AuthorData.updateAuthor);
module.exports = router;