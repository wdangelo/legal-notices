import { Router } from "express";

import { createNoticesController } from "../modules/Notices/useCases/createSpecification";

const noticesRoutes = Router();

noticesRoutes.post("/", (request, response) => {
    return createNoticesController.handle(request, response);
})

export { noticesRoutes };
