import bucketRouter from "@modules/bucket/routes/bucket.route";
import objectRouter from "@modules/object/routes/object.route";
import { Router } from "express";

const routes = Router();

routes.use("/bucket", bucketRouter);
routes.use("/object", objectRouter);

export default routes;
