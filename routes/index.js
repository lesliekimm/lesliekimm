var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET resume page. */
router.get('/resume', function(req, res, next) {
  res.render('resume', { title: '| resume |' });
});

/* GET portfolio page. */
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: '| portfolio |' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: '| about |' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: '| contact |' });
});

/*** PORTFOLIOS ***/
/* GET software portfolio page. */
router.get('/software', function(req, res, next) {
  res.render('portfolio/software', { title: '| software |' });
});

/* GET art portfolio page. */
router.get('/art', function(req, res, next) {
  res.render('portfolio/art', { title: '| art |' });
});

/*** ART PORTFOLIOS ***/
/* GET nothing's impossible portfolio page. */
router.get('/art/nothings_impossible', function(req, res, next) {
  res.render('portfolio/art/nothings_impossible', { title: '| nothings impossible |' });
});

/* GET paintings portfolio page. */
router.get('/art/paintings', function(req, res, next) {
  res.render('portfolio/art/paintings', { title: '| paintings |' });
});

/* GET design work portfolio page. */
router.get('/art/design_work', function(req, res, next) {
  res.render('portfolio/art/design_work', { title: '| design work |' });
});

/* GET other mediums portfolio page. */
router.get('/art/other_mediums', function(req, res, next) {
  res.render('portfolio/art/other_mediums', { title: '| other mediums |' });
});

/* GET layout portfolio page. */
router.get('/art/layout', function(req, res, next) {
  res.render('portfolio/art/layout', { title: '| layout |' });
});

/* GET photography portfolio page. */
router.get('/art/photography', function(req, res, next) {
  res.render('portfolio/art/photography', { title: '| photography |' });
});

/* GET crafts portfolio page. */
router.get('/art/crafts', function(req, res, next) {
  res.render('portfolio/art/crafts', { title: '| crafts |' });
});

module.exports = router;
