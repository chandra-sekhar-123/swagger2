const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: String,
  address: String,
  position: String,
  salary: Number,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Employee', EmployeeSchema);
/**  schema is stucture of data which can be stored {employee name, address, employee id, position, salary, 
 * updated_at }*/