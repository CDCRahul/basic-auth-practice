const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserDetailsSchema = new Schema({
    username: { type: String, required: true },
    phone: { type: String },
    country_code: { type: String },
    interest: [String], // Array of interests
    subscription_status: { type: Boolean, default: false },
    blacklist: { type: Boolean, default: false },
    wishlist: [String], // Array of wishlist items or IDs
  });
  
  module.exports = mongoose.model('UserDetails', UserDetailsSchema);
  