const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    name: { type: String, required: true },
    authority_level: { type: Number, required: true }, // Defines the hierarchy or level of access
  });
  
  module.exports = mongoose.model('Role', RoleSchema);
  