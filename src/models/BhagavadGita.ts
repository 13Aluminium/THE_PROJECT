import mongoose from "mongoose";

const BhagavadGitaSchema = new mongoose.Schema({
  chapter: String,
  chapter_title: String,
  verse: Number,
  shlok: String,
  transliteration: String,
  translation: String,
});

// If model already exists, reuse it to prevent multiple model creation
export const BhagavadGita = mongoose.models.BhagavadGita || mongoose.model("BhagavadGita", BhagavadGitaSchema);
