var express = require('express'),
    app = express();


// Configuration
app.configure('development', function() {
  app.locals({pretty: true});
  app.locals({isDev: true});
  app.use(express.logger('dev'));
});
app.configure('production', function() {
  app.locals({isProd: true});
  app.use(express.logger());
});
app.configure('all', function() {

  app.enable('trust proxy');
  app.set('view engine', 'jade');
  app.locals({title: 'Morgan Ney'});

  app.use(express.compress());
  app.use(app.router);
  app.use(function(req, res, next) {
    // TODO: 404 view
    res.send(404);
  });
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.send(500);
  });
});

// Routing
app.get('/', function(req, res) {
  res.render('index');
});
app.get('/robots.txt', function(req, res) {
  res.set({
    'Content-Type': 'text/plain',
    'Expires': new Date("1/1/2050").toUTCString()
  });
  res.send(200, 'User-agent: *\nDisallow: ');
});


require('http').createServer(app).listen('3030', function() {
  console.log('morgan.neys.info now listening on port 3030')
});
