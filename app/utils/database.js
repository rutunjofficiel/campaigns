import { MongoClient } from "mongodb";
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);
export async function connectToDatabase({ CustID }) {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db("campaigns");
    const coll = await db.collection(CustID).find({}).toArray();
    return JSON.parse(db);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
