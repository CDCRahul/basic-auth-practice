const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: Schema.Types.ObjectId, ref: 'Role' }, // Refers to Role
  details: { type: Schema.Types.ObjectId, ref: 'UserDetails' }, // Refers to User Details
});

module.exports = mongoose.model('User', UserSchema);
