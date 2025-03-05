import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Scripture } from '@/models/Scripture';

export async function GET() {
  try {
    await connectToDatabase();
    const scriptures = await Scripture.find();
    console.log('Fetched Scriptures:', scriptures); // Debugging
    return NextResponse.json(scriptures);
  } catch (error) {
    console.error('Error fetching scriptures:', error);
    return NextResponse.json({ message: 'Error fetching scriptures' }, { status: 500 });
  }
}
