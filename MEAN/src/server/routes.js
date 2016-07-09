var router = require('express').Router();
var four0four = require('./utils/404')();
var data = require('./data');


// Mongoose import
var mongoose = require('mongoose');

// Mongoose connection to MongoDB (ted/ted is readonly)
mongoose.connect('mongodb://localhost/interview', function (error) {
  if (error) {
    console.log(error);
  }
});


// Mongoose Schema definition
var Schema = mongoose.Schema;
var QuestionSchema = new Schema({
  id: Number,
  question: String,
  answer: String
});

// Mongoose Model definition
var Question = mongoose.model('questions', QuestionSchema);

router.get('/random', getRandom);
router.get('/people', getLastPeople);
router.get('/categories', getCategories);
router.get('/person/:id', getPerson);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

function getRandom(req, res, next) {
  //res.status(200).send(data.random);
  Question.find({}, function (err, docs) {
    res.json(docs);
  });
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
