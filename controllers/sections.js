var express = require('express');
var router = express.Router();
var passport = require('passport');
var userSection = require('../models/sections');
router.get("/sections", userSection.getAllSection);
router.get("/sections/add", function (req, res) {
    res.render('addSection');
})
router.post('/sections/add',userSection.addSection);
router.get('/sections/delete/:id',userSection.deleteSection);

router.get('/sections/edit/:id', userSection.getSectionById);
router.post('/sections/edit/:id', userSection.updateSection);
module.exports = router;

/* GET New Blob page. */
// router.get('/new', function(req, res) {
//     res.render('blobs/new', { title: 'Add New Blob' });
// });

module.exports = router