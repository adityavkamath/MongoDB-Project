import { MongoClient } from "mongodb";
export async function Program5() {
  const mongouri = "mongodb://localhost:27017";
  const client = new MongoClient(mongouri);

  try {
    await client.connect();
    const database = client.db("testtDB");
    const collection = database.collection("users");

    const filter = { name: "Aditya" };
    const result = await collection.deleteOne(filter);

    console.log(`${result.deletedCount} document(s) deleted.`);

    const users = await collection.find().toArray();
    console.log("Users found:", users);
  } finally {
    await client.close();
  }
}
