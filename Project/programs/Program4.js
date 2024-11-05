import { MongoClient } from "mongodb";
export async function Program4() {
  const mongouri = "mongodb://localhost:27017";
  const client = new MongoClient(mongouri);

  try {
    await client.connect();
    const database = client.db("testtDB");
    const collection = database.collection("users");

    const filter = { name: "Aditya" };
    const updateDoc = { $set: { city: "Shivamogga" } };
    const result = await collection.updateOne(filter, updateDoc);

    console.log(`${result.modifiedCount} document(s) updated.`);

    const users = await collection.find().toArray();
    console.log("Users found:", users);
  } finally {
    await client.close();
  }
}
