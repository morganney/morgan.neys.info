import express from 'express'
import compression from 'compression'
import errorhandler from 'errorhandler'
import logger from 'morgan'

import { routes } from './routes.js'

const app = express()

// Configuration
if (process.env.NODE_ENV === 'development') {
  app.locals.pretty = true
  app.locals.isDev = true
  app.locals.googleMapsKey = null
  app.use(logger('dev'))
  app.use(express.static('.'))
  app.use(errorhandler())
} else {
  app.locals.isProd = true
  app.locals.googleMapsKey = process.env.GOOGLE_MAPS_KEY
  app.use(logger('combined'))
}

app.enable('trust proxy')
app.set('views', './packages/server/src/views')
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
app.get('/movies', routes.movies)
app.get('/frontend-engineer-resume', routes.resume)
app.get('/family', routes.family)

// 404
app.use(function(req, res) {
  res.status(404).render('notFound')
})
// Error handling
app.use(function(err, req, res) {
  console.error(err.stack)
  res.status(500)
})

export { app }
