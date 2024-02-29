import { MongoDbClient } from "./provider/db/mongo.provider";

export default class Service {
  constructor(
    private readonly db = "devops_application",
    private readonly collection = "api_check"
  ) {}

  public async index() {
    const collection = await MongoDbClient.getCollection(
      this.db,
      this.collection
    );

    const data = await collection.find().toArray();
    return data[0];
  }
}
