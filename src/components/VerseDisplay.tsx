import React from "react";

interface Verse {
  _id: string;
  chapter: string;
  chapter_title: string;
  verse: string;
  shlok: string;
  transliteration: string;
  translation: string;
}

interface Props {
  verse: Verse;
}

export default function VerseDisplay({ verse }: Props) {
  return (
    <article className="mb-8 bg-white dark:bg-gray-900 p-6 rounded-md shadow">
      <h2 className="text-2xl font-bold mb-2 text-center">
        Chapter {verse.chapter} – {verse.chapter_title} (Verse {verse.verse})
      </h2>

      <p className="text-2xl font-serif mb-4 text-gray-800 dark:text-gray-100 whitespace-pre-line">
        {verse.shlok}
      </p>

      <p className="text-xl italic mb-4 text-gray-600 dark:text-gray-300 whitespace-pre-line">
        {verse.transliteration}
      </p>

      <p className="text-lg text-gray-700 dark:text-gray-200">
        <strong>Translation:</strong> {verse.translation}
      </p>
    </article>
  );
}
