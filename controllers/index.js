const express = require('express');
 const router = express.Router()
var app = express();
app.use('/', require('./user'))
app.use('/', require('./sections'))
app.use('/', require('./author'))
app.get('/', function(req, res) {
    res.render('default',{ title: 'Trang Chủ' })
})
app.use(function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});
module.exports = app