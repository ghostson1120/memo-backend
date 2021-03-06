const mongoose = require('mongoose');

const { Schema } = mongoose;

const migrationSchema = new Schema(
  {
    name: { type: String, required: true, trim: true }
  },
  {
    collection: 'migrations',
    timestamps: true
  }
);

const Migration = mongoose.model('Migration', migrationSchema);

module.exports = Migration;
