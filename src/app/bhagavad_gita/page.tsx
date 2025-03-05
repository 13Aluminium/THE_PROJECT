'use client';

import { useEffect, useState } from 'react';
import VerseDisplay from '@/components/VerseDisplay';
import Link from 'next/link';

interface Verse {
  _id: string;
  chapter: string;
  chapter_title: string;
  verse: string;
  shlok: string;
  transliteration: string;
  translation: string;
}

export default function BhagavadGitaPage() {
  const [verses, setVerses] = useState<Verse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/bhagavad_gita');
        if (!res.ok) throw new Error(`API returned status ${res.status}`);

        const data = await res.json();
        setVerses(data);
      } catch (err: any) {
        console.error('Error fetching verses:', err);
        setError('Failed to load verses');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <main className="min-h-screen p-4 sm:p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Bhagavad Gita</h1>

      <div className="space-y-6">
        {verses.map((verse) => (
          <Link key={verse._id} href={`/bhagavad_gita/${verse.verse}`}>
            <a className="block p-4 rounded shadow-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <h2 className="text-xl font-semibold mb-1">
                {verse.chapter} – {verse.chapter_title} (Verse {verse.verse})
              </h2>
            </a>
          </Link>
        ))}
      </div>
    </main>
  );
}
