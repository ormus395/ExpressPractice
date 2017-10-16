const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let PantSchema = new Schema({
  maker: {
    type: String,
    required: true  
  },
  size: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Pants = mongoose.model('Pants', PantSchema);

module.exports = Pants;