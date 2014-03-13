var express = require('express'),
    routes = require('./routes'),
    app = express();


// Configuration
app.configure('development', function() {
  app.locals({
    pretty: true,
    isDev: true
  });
  app.use(express.logger('dev'));
});
app.configure('production', function() {
  app.locals({isProd: true});
  app.use(express.logger());
});
app.configure('all', function() {
  app.enable('trust proxy');
  app.set('view engine', 'jade');
  app.locals({
    title: 'Morgan Ney',
    bodyClass: 'default'
  });
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
app.get('/', routes.home);
app.get('/robots.txt', routes.robots);
app.get('/hobbies/motorcycles', routes.motorcycles);
app.get('/hobbies/writing', routes.writing);


require('http').createServer(app).listen('3030', function() {
  console.log('morgan.neys.info now listening on port 3030')
});
