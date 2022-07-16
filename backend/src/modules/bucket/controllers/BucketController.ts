import { Request, Response } from "express";
import BucketService from "../services/BucketService";

export default class BucketController {
  public async show(request: Request, response: Response): Promise<Response> {
    const service = new BucketService();

    const retorno = await service.listBucket();

    return response.json(retorno);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    return response.json({});
  }
}
