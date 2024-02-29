import { Request, Response } from "express";
import Service from "./service";

export default class Controller {
  public async index(request: Request, response: Response) {
    const service = new Service();
    return response.json(await service.index());
  }
}
