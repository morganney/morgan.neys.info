const routes = {
  home(req, res) {
    res.locals.bodyClass = 'home'
    res.render('index')
  },
  writing(req, res) {
    res.locals.title = "Morgan Ney's Writing"
    res.locals.bodyClass = 'writing'
    res.render('writing')
  },
  playlists(req, res) {
    res.locals.title = "Morgan Ney's Playlists"
    res.locals.bodyClass = 'playlists'
    res.render('playlists')
  },
  family(req, res) {
    res.locals.title = "Morgan Ney's Family"
    res.locals.bodyClass = 'family'
    res.render('family')
  },
  resume(req, res) {
    res.locals.title = "Morgan Ney's Resume"
    res.locals.bodyClass = 'resume'
    res.render('resume')
  },
  movies(req, res) {
    res.locals.title = "Morgan Ney's Movies"
    res.locals.bodyClass = 'movies'
    res.render('movies')
  },
  robots(req, res) {
    res.set({
      'Content-Type': 'text/plain',
      Expires: new Date('1/1/2050').toUTCString()
    })
    res.status(200).send('User-agent: *\nDisallow: ')
  }
}

export { routes }
