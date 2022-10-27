const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new mongoose.Schema({
 name: String,
  address: String,
  category: String,
  gender: String,
  phone: String,
  email: String,
  password: String,
  dob: Date,
  course: String,
  jobStatus: String,
  roles:[String],
  updated_at: { type: Date, default: Date.now },
  mentor: { type: Schema.Types.ObjectId, ref: 'Employee' }
});

module.exports = mongoose.model('User', UserSchema);
/**  schema is stucture of data which can be stored {employee name, address, employee id, position, salary, 
 * updated_at }*/