const express = require('express')
var router = express.router()

var UserData = require('../models/user')

router.post('/user', UserData.addUser)
router.get('/user', UserData.getAllUser)
router.delete('/delete/:id', UserData.deleteUser)
router.put('/update/:id', UserData.updateUser)
router.get('/user/:id', UserData.getUserById)
module.exports = router