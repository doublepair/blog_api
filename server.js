var express = require('express'),
  app = express(),
  
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Article = require('../api_for_blog/models/articlesModel'), 
  bodyParser = require('body-parser');
  

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Articlesdb', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }); 

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  if (req.method === "OPTIONS") {
    return res.status(200).end();
}
next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



/*
app.get('/', function(req, res){
  //res.sendFile(__dirname+'/bin/index.html'); // change the path to your index.html
});
*/

var routes = require('../api_for_blog/routes/articlesRoutes'); 
routes(app); 


app.listen(port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' Error 404'})
});


console.log('api for blog started on: ' + port);