import mongoose from 'mongoose';

const ScriptureSchema = new mongoose.Schema({
  title: String,
  sanskrit: String,
  translation: String,
  commentary: String,
}, { timestamps: true });

export const Scripture = mongoose.models.Scripture || mongoose.model('Scripture', ScriptureSchema);
