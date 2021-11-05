import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


class CreateCategorycontroller {
    
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;
        const { file } = request
        console.log(file.filename)
        const createCategoryUseCase = container.resolve(CreateCategoryUseCase)
    
        await createCategoryUseCase.execute({ name, description, icon: file.filename  })
    
        return response.status(201).send();
    }
}

export { CreateCategorycontroller };
