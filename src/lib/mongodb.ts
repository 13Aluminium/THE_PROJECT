import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";
const options = {};

export async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "yourDatabaseName", // Change this to your actual DB name
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

// If already connected, use the global instance (prevents multiple connections)
if (!global._mongoClientPromise) {
  client = new MongoClient(MONGODB_URI, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;