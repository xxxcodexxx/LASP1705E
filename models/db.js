const uri = 'mongodb:localhost:270017/cms'
const mongoose = require('mongoose')
mongoose.connect(uri)

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection fail:'))
db.once('open', (callback) => {
    console.log('connected')
})
