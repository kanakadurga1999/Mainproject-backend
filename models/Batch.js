const mongoose = require('mongoose');


const batchSchema = new mongoose.Schema({
    batch_name: { type: String, unique: true, required: true },
    exit_test_date: { type: Date, required: true },
  });
  module.exports = mongoose.model('Batch', batchSchema);