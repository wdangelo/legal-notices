import { Router } from "express";
import { agenciesRoutes } from "./agencies.routes";

const router = Router();

router.use("/agencies", agenciesRoutes);


export { router };