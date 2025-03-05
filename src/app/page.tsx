import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Ancient Hindu Scriptures</h1>
      <p className="mb-8 text-lg text-center max-w-xl">
        Explore sacred texts in Sanskrit with translations and commentary.
      </p>
      <Link
        href="/bhagavad_gita"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Read Bhagavad Gita
      </Link>
    </main>
  );
}
