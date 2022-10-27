
const Employee = require("../models/Employee");
const jwt = require("jsonwebtoken");
const employeeController = {};


// Show list of employees as JSON
employeeController.listJson = (req, res) => {
  
  // if token is not available, it will return 401
  const token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  // token is available and not valid then it will return 500 internal server error
  jwt.verify(token, "abcdefgh", (err, decoded) => {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.', err:err });
  });

  Employee.find({}).exec((err, employees) => {
    if (err) {
      console.log("Error:", err);
      res.send(400, { msg: err });
    }
    else {
      res.send(200, { employees: employees });
    }
  });
};


// Show employee by id
employeeController.show = (req, res) => {
  Employee.findOne({ _id: req.params.id }).exec((err, employee) => {
    if (err) {
      console.log("Error:", err);
      res.send(400, { msg: err });
    }
    else {
      res.render("../views/employees/show", { employee: employee });
    }
  });
};

// Show employee by id
employeeController.byId = (req, res) => {
  Employee.findOne({ _id: req.params.id }).exec((err, employee) => {
    if (err) {
      console.log("Error:", err);
      res.send(400, { msg: err });
    }
    else {
      res.send(200, { employee: employee });
    }
  });
};

// Create new employee
employeeController.create = (req, res) => {
  res.render("../views/employees/create");
};

// Save new employee
employeeController.save = (req, res) => {
  const employee = new Employee(req.body);

  employee.save((err) => {
    if (err) {
      console.log(err);
      res.send(400, { err: err });
    } else {
      console.log("Successfully created an employee.");
      res.send({ id: employee._id });
    }
  });
};


// Update an employee
employeeController.update = (req, res) => {
  Employee.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, address: req.body.address, position: req.body.position, salary: req.body.salary } }, { new: true }, function (err, employee) {
    if (err) {
      console.log(err);
      res.render(400, { employee: req.body });
    }
    res.send({ id: employee._id });
  });
};

// Delete an employee
employeeController.delete = (req, res) => {
  Employee.remove({ _id: req.params.id }, (err) => {
    if (err) {
      console.log(err);
      res.send(400, {msg:"Employee deleted"})
    }
    else {
      console.log("Employee deleted!");
      res.send({"msg":"Employee deleted successfully"});
    }
  });
};

module.exports = employeeController;
