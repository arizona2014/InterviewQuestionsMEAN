var router = require('express').Router();
var four0four = require('./utils/404')();
var data = require('./data');

router.get('/random', getRandom);
router.get('/people', getLastPeople);
router.get('/categories', getCategories);
router.get('/person/:id', getPerson);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

function getRandom(req, res, next) {
  res.status(200).send(data.random);
}

function getLastPeople(req, res, next) {
  res.status(200).send(data.people);
}

function getCategories(req, res, next) {
  res.status(200).send(data.categories);
}

function getPerson(req, res, next) {
  var id = +req.params.id;
  var person = data.people.filter(function(p) {
    return p.id === id;
  })[0];

  if (person) {
    res.status(200).send(person);
  } else {
    four0four.send404(req, res, 'person ' + id + ' not found');
  }
}
