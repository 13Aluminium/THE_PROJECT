import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb"; // Ensure you have MongoDB connection setup

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("yourDatabaseName"); // Update with your DB name
    const verses = await db.collection("bhagavad_gita").find().toArray();

    return NextResponse.json(verses);
  } catch (error) {
    console.error("Error fetching Bhagavad Gita:", error);
    return NextResponse.json({ error: "Failed to load verses" }, { status: 500 });
  }
}
