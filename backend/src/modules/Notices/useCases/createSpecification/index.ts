import { NoticesRepository } from "../../repositories/implementations/NoticesRepository";
import { CreateNoticesController } from "./CreateNoticesController";
import { CreateNoticesUseCase } from "./CreateNoticesUseCase";


const noticesRepository = new NoticesRepository();

const createNoticesUseCase = new CreateNoticesUseCase(noticesRepository);

const createNoticesController = new CreateNoticesController(createNoticesUseCase);

export { createNoticesController };
