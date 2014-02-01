var express = require('express');
var app = express();
var cons = require('consolidate');

// init view helpers
require('./helpers/view');

app.use('/public',express.static(require('path').join(__dirname, '/public')));
app.use(express.bodyParser());
app.use(express.methodOverride());

app.engine('html', cons.dust);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(app.router);
app.all('*',require('./routes/index.js'));

app.use(function (err, req, res, next) {
  if(!err){
    return next();
  }
  console.error(err);
  res.send(500, 'Something broke!');
});

app.use(function (req, res, next) {
  res.send(404, 'Page not found');
});


app.listen(3000);
console.log('Listening on port 3000');