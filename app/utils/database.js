import { MongoClient } from "mongodb";
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);
export async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db("campaigns");
    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export async function searchCollection(CustID) {
  try {
    const db = await connectToDatabase();
    const collection = db.collection(CustID);
    console.log("Collection: ", collection);
    return collection;
  } catch (error) {
    console.error("Error searching collection in MongoDB:", error);
  }
}
