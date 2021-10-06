import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { noticesRoutes } from "./notices.routes";

const routes = Router()


routes.use("/categories", categoriesRoutes)
routes.use("/notices", noticesRoutes)

export { routes }