import { connectToDatabase } from '@/lib/mongodb';
import { BhagavadGita } from '@/models/BhagavadGita';
import Link from 'next/link';

interface VerseDoc {
  _id: string;
  chapter: string;
  chapter_title: string;
  verse: string;
  shlok: string;
  transliteration: string;
  translation: string;
}

export default async function SingleVersePage({
  params,
}: {
  params: { index: string };
}) {
  // Convert the route param to a number (1-based)
  const pageIndex = parseInt(params.index, 10);
  if (isNaN(pageIndex) || pageIndex < 1) {
    return <div>Invalid verse index.</div>;
  }

  // Connect to MongoDB
  await connectToDatabase();

  // Get total verse count
  const totalCount = await BhagavadGita.countDocuments();

  // If index is beyond total, no more verses
  if (pageIndex > totalCount) {
    return (
      <div className="min-h-screen p-4">
        <p>No more verses.</p>
        <Link
          href="/bhagavad_gita"
          className="text-blue-600 hover:underline"
        >
          Go back
        </Link>
      </div>
    );
  }

  // Fetch a single verse by skipping (pageIndex - 1)
  // e.g. if pageIndex=1 => skip(0), if pageIndex=2 => skip(1), etc.
  const doc = await BhagavadGita.findOne<VerseDoc>()
    .sort({ _id: 1 }) // or sort by a numeric field if you have one
    .skip(pageIndex - 1)
    .lean();

  if (!doc) {
    return <div>Verse not found.</div>;
  }

  // Determine if there's a "next" verse
  const nextIndex = pageIndex + 1 <= totalCount ? pageIndex + 1 : null;

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Bhagavad Gita</h1>

      <article className="p-4 rounded shadow-md bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 transition-colors">
        <h2 className="text-xl font-semibold mb-1">
          {doc.chapter} – {doc.chapter_title} (Verse {doc.verse})
        </h2>

        <p className="text-gray-700 dark:text-gray-200 whitespace-pre-line">
          {doc.shlok}
        </p>

        <p className="mt-2 italic text-gray-600 dark:text-gray-300 whitespace-pre-line">
          {doc.transliteration}
        </p>

        <p className="mt-2 text-gray-800 dark:text-gray-100">
          <strong>Translation:</strong> {doc.translation}
        </p>
      </article>

      <div className="mt-4 flex items-center justify-between">
        {/* Go back to index */}
        <Link
          href="/bhagavad_gita"
          className="text-blue-600 hover:underline"
        >
          Back
        </Link>

        {/* Next link if more verses */}
        {nextIndex ? (
          <Link
            href={`/bhagavad_gita/${nextIndex}`}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Next →
          </Link>
        ) : (
          <span>No more verses</span>
        )}
      </div>
    </div>
  );
}
