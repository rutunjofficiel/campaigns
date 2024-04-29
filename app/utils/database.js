import { MongoClient } from "mongodb";
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = client.db("campaigns");
export async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export async function searchCollection(CustId) {
  try {
    await client.connect();

    const collections = await db.listCollections().toArray();
    const collectionExists = collections.some((col) => col.name === CustId);
    console.log("collectionExists", collectionExists);
    if (collectionExists == true) {
      return collectionExists;
    } else if (collectionExists == false) {
      await db.createCollection(CustId);
    }
  } catch (error) {
    console.error("Error checking collection existence:", error);
    return false;
  } finally {
    client.close();
  }
}

export async function insertNewWhatsappSender(CustId, whatsappSender) {
  console.log("whatsappSender:", CustId, whatsappSender);
  try {
    await client.connect();

    const collection = db.collection(CustId);

    const insertResult = collection.update(
      { CustId: CustId },
      {
        $setOnInsert: { settings: [whatsappSender] },
      },
      { upsert: 1 },
    );
  } catch (error) {
    console.log("error inserting new whatsapp sender:", error);
  }
}

// export const getSettings(){

// }
