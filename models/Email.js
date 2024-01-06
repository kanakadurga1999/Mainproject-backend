const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'TestAdminProfile' },
    receiver_email: { type: String, required: true },
    subject: { type: String, required: true },
    body: { type: String, required: true },
    attachment_link: { type: String, required: true },
  });

  module.exports=mongoose.model('Email', emailSchema);