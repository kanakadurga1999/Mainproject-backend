const mongoose = require('mongoose');



const testAdminProfileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    
  });

  module.exports =mongoose.model('TestAdminProfile', testAdminProfileSchema);