exports.home = function(req, res) {
  res.locals({bodyClass: 'home'});
  res.render('index');
};

exports.motorcycles = function(req, res) {
  res.locals({title: "Morgan Ney's Motorcycle"});
  res.render('motorcycles');
};

exports.writing = function(req, res) {
  res.locals({title: "Morgan Ney's Writing"});
  res.render('writing');
};

exports.robots = function(req, res) {
  res.set({
    'Content-Type': 'text/plain',
    'Expires': new Date("1/1/2050").toUTCString()
  });
  res.send(200, 'User-agent: *\nDisallow: ');
};
