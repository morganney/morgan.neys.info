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
  app.locals.googleMapsKey = null
  app.use(logger('dev'))
  app.use(express.static('.'))
} else {
  app.locals.isProd = true
  app.locals.googleMapsKey = process.env.GOOGLE_MAPS_KEY
  app.use(logger('combined'))
}

app.enable('trust proxy')
app.set('view engine', 'pug')
app.locals.title = 'Morgan Ney'
app.locals.bodyClass = 'default'
app.locals.metaContent = `Personal website of Morgan Ney, a father, husband, and web developer originally from the\
 San Francisco Bay Area and now residing in Texas.`
app.locals.currentYear = new Date().getFullYear()
app.use(compression())

// Routing
app.get('/', routes.home)
app.get('/robots.txt', routes.robots)
app.get('/writing', routes.writing)
app.get('/playlists', routes.playlists)
app.get('/memes', routes.memes)
app.get('/resume', routes.resume)
app.get('/family', routes.family)

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
