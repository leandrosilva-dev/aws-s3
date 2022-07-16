import { Router } from "express";
import ObjectController from "../controllers/ObjectController";

const objectRouter = Router();
const objectController = new ObjectController();

objectRouter.get("/", objectController.show);
objectRouter.post("/", objectController.create);

export default objectRouter;
