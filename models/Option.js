const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OptionSchema = new mongoose.Schema({
  name: String,
  id: String,
  char: String,
  
  updated_at: { type: Date, default: Date.now },
 question : { type: Schema.Types.ObjectId, ref: 'Question' }
});

module.exports = mongoose.model('Option', OptionSchema);
/**  schema is stucture of data which can be stored {employee name, address, employee id, position, salary, 
 * updated_at }*/