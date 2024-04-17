import * as express from "express";
import { authentification } from "../middleware/authentification";
import { RunController } from "../controllers/run.controllers";
import { authorization } from "../middleware/authorization";

const Router = express.Router();

Router.get("/runs", authentification, RunController.getAllRuns);
Router.post("/runs", authentification, RunController.createRun);

/* Router.put(
  "/runs/:id",
  authentification,
  authorization(["admin"]),
  RunController.updateRun
); */

Router.delete(
  "/runs/:id",
  authentification,
  authorization(["admin"]),
  RunController.deleteRun
);
export { Router as runRouter };