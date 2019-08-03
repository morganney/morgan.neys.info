const express = require('express')
const compression = require('compression')
const errorhandler = require('errorhandler')
const logger = require('morgan')

const routes = require('./routes')

const app = express()

// Configuration
if (app.get('env') === 'development') {
  app.locals.pretty = true
  app.locals.isDev = true
  app.use(logger('dev'))
  app.use(express.static('.'))
} else {
  app.locals.isProd = true
  app.use(logger('combined'))
}

app.enable('trust proxy')
app.set('view engine', 'pug')
app.locals.title = 'Morgan Ney'
app.locals.bodyClass = 'default'
app.use(compression())

// Routing
app.get('/', routes.home)
app.get('/robots.txt', routes.robots)
app.get('/hobbies/motorcycles', routes.motorcycles)
app.get('/hobbies/writing', routes.writing)

// Error handling
app.use(function(req, res, next) {
  // TODO: 404 view
  res.status(404)
})
app.use(function(err, req, res, next) {
  console.error(err.stack)
  res.status(500)
})

app.listen('3030', function() {
  console.log('morgan.neys.info now listening on port 3030')
})
