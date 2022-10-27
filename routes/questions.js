const express = require('express');
const router = express.Router();
const question = require("../controllers/QuestionController.js");



/* GET questions listing. read */
router.get('/', (req, res, next) => {
  question.listJson(req, res);
});

/* GET questions listing. read*/
router.get('/:id', (req, res, next) => {
  question.byId(req, res);
});

/* Create question*/
router.post('/post', (req, res, next) => {
  question.save(req, res);
});

/* update question in the database*/
router.put('/put/:id', (req, res, next) => {
  question.update(req, res);
});

/* delete question from the database*/
router.delete('/delete/:id', (req, res, next) => {
  question.delete(req, res);
});

/*  question and createdby details from the database*/
router.get('/createdby/:id', (req, res, next) => {
  question.createdby(req, res);
});
/*  question and createdby details from the database*/
router.get('/options/:id', (req, res, next) => {
  question.options(req, res);
});

module.exports = router;
