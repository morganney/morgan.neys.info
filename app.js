var express = require('express'),
    app = express();


// Configuration
app.configure('development', function() {
  app.locals({pretty: true});
  app.use(express.logger('dev'));
});
app.configure('production', function() {
  app.use(express.logger());
});
app.configure('all', function() {
  app.enable('trust proxy');
  app.set('view engine', 'jade');
  app.use(express.compress());
});

// Routing
app.get('/', function(req, res) {
  res.render('index');
});


require('http').createServer(app).listen('3030', function() {
  console.log('morgan.neys.info now listening on port 3030')
});
