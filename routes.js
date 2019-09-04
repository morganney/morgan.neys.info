exports.home = function(req, res) {
  res.locals.bodyClass = 'home'
  res.render('index')
}
exports.writing = function(req, res) {
  res.locals.title = "Morgan Ney's Writing"
  res.locals.bodyClass = 'writing'
  res.render('writing')
}
exports.playlists = function(req, res) {
  res.locals.title = "Morgan Ney's Playlists"
  res.locals.bodyClass = 'playlists'
  res.render('playlists')
}
exports.family = function(req, res) {
  res.locals.title = "Morgan Ney's Family"
  res.locals.bodyClass = 'family'
  res.render('family')
}
exports.resume = function(req, res) {
  res.locals.title = "Morgan Ney's Resume"
  res.locals.bodyClass = 'resume'
  res.render('resume')
}
exports.memes = function(req, res) {
  res.locals.title = "Morgan Ney's Memes"
  res.locals.bodyClass = 'memes'
  res.render('memes')
}
exports.robots = function(req, res) {
  res.set({
    'Content-Type': 'text/plain',
    'Expires': new Date("1/1/2050").toUTCString()
  })
  res.status(200).send('User-agent: *\nDisallow: ')
}
