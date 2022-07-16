import BucketController from "@modules/bucket/controllers/BucketController";
import { Router } from "express";

const bucketRouter = Router();
const bucketController = new BucketController();

bucketRouter.get("/", bucketController.show);
bucketRouter.post("/", bucketController.create);

export default bucketRouter;
