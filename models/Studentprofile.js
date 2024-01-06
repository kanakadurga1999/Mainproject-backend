const mongoose = require('mongoose');

const studentProfileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    phone_number: { type: String, required: true },
    dob: { type: Date, required: true },
    batch_name: {
      type: String,
      enum: ['KKEM_March_CSA', 'KKEM_March_DSA', 'KKEM_March_MLAI', 'KKEM_March_FSD', 'KKEM_March_ST'],
      required: true,
    },
    gender: { type: String, required: true },
    exit_test_confirmation: { type: Boolean, default: false },
  });

  module.exports= mongoose.model('StudentProfile', studentProfileSchema);

  