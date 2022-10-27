const express = require('express');
const router = express.Router();
const employee = require("../controllers/EmployeeController.js");

// Get all employees in the UI
router.get('/', (req, res) => {
  employee.listJson(req, res);
});


// Get single employee by id
router.get('/:id', (req, res) => {
  employee.byId(req, res);
});




// Save employee
router.post('/post', (req, res) => {
  employee.save(req, res);
});


// Edit update
router.put('/put/:id', (req, res) => {
  employee.update(req, res);
});

// Edit update
router.delete('/delete/:id', (req, res, next) => {
  employee.delete(req, res);
});

module.exports = router;
