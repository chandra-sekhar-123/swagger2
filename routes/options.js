const express = require('express');
const router = express.Router();
const option = require("../controllers/OptionController.js");



/* GET options listing. read */
router.get('/', (req, res, next) => {
  option.listJson(req, res);
});

/* GET options listing. read*/
router.get('/:id', (req, res, next) => {
  option.byId(req, res);
});

/* Create option*/
router.post('/', (req, res, next) => {
  option.save(req, res);
});

/* update option in the database*/
router.put('/:id', (req, res, next) => {
  option.update(req, res);
});

/* delete option from the database*/
router.delete('/:id', (req, res, next) => {
  option.delete(req, res);
});

/*  option and question details from the database*/
router.get('/question/:id', (req, res, next) => {
  option.question(req, res);
});

module.exports = router;
