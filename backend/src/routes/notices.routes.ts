import { Router } from "express";
import { NoticesRepository } from "../modules/Notices/repositories/NoticesRepository";
import { CreateNoticesService } from "../modules/Notices/services/CreateNoticesServices";

const noticesRoutes = Router();

const noticesRepository = new NoticesRepository();

noticesRoutes.post("/", (request, response) => {
    const { title } = request.body;

    const createNoticesServices = new CreateNoticesService(noticesRepository);

    createNoticesServices.execute({ title })

    return response.status(201).send()
})

export { noticesRoutes };
