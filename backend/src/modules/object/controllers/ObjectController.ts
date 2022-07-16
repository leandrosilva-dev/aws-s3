import { Request, Response } from "express";
import ObjectService from "../services/ObjectService";

export default class ObjectController {
  constructor() {}
  public async show(request: Request, response: Response): Promise<Response> {
    const service = new ObjectService();

    const retorno = await service.listObject();

    return response.json(retorno);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const service = new ObjectService();

    await service.upload();

    return response.json();
  }
}
