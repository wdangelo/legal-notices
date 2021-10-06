import {Request, Response} from "express";

import { CreateNoticesUseCase } from "./CreateNoticesUseCase";

class CreateNoticesController {
    constructor(private createNoticesUseCase: CreateNoticesUseCase) {}
    handle(request: Request, response: Response): Response{
        const { title } = request.body;

    
        this.createNoticesUseCase.execute({ title })
    
        return response.status(201).send()
    }
}

export { CreateNoticesController }