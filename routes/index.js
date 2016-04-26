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

/* GET software portfolio page. */
router.get('/software', function(req, res, next) {
  res.render('software', { title: '| software |' });
});

/* GET art portfolio page. */
router.get('/art', function(req, res, next) {
  res.render('art', { title: '| art |' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: '| about |' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: '| contact |' });
});

module.exports = router;
