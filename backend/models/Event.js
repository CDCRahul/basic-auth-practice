const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    host: { type: Schema.Types.ObjectId, ref: 'User' }, // Refers to User who is hosting the event
    fees: { type: Number },
    isPublic: { type: Boolean, default: true },
    location: { type: String },
    time: { type: Date },
  });
  
  module.exports = mongoose.model('Event', EventSchema);
  