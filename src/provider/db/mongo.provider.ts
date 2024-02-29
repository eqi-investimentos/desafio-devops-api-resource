import { MongoClient } from "mongodb";

export class MongoDbClient {
  private static connection?: Promise<MongoClient>;

  static async connect(): Promise<MongoClient> {
    if (!MongoDbClient.connection) {
      console.info(`Connecting to MongoDB.`);

      const connectionUrl = process.env.MONGO_DB_URL;
      try {
        if (!connectionUrl) {
          throw new Error("Missing environment variable: MONGO_DB_URL");
        }

        MongoDbClient.connection = MongoClient.connect(connectionUrl);
      } catch (error) {
        throw new Error(`Failed to connect to MongoDB - ${error}`);
      }
    }

    return await MongoDbClient.connection;
  }

  static async getCollection(dbName: string, collectionName: string) {
    const client = await MongoDbClient.connect();
    return client.db(dbName).collection(collectionName);
  }
}
