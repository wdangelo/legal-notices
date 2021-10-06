import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
class CreateCategorycontroller {
    constructor(private createCategoryUseCase: CreateCategoryUseCase) {}
    handle(request: Request, response: Response): Response {
        const { name, title } = request.body;
        const { path } = request.file
    
        this.createCategoryUseCase.execute({ name, title, path })
    
        return response.status(201).send();
    }
}

export { CreateCategorycontroller };
