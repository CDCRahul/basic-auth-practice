const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubscriptionSchema = new Schema({
    badge: { type: String },
    isVerified: { type: Boolean, default: false },
    fees: { type: Number },
    validate_till: { type: Date },
  });
  
module.exports = mongoose.model('Subscription', SubscriptionSchema);
  