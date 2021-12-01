import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


class CreateCategorycontroller {
    
    async handle(request: Request, response: Response): Promise<Response> {

        const { name, description } = request.body;

        const iconRequest = request.file as Express.Multer.File

        const icon = iconRequest.filename
        
        const createCategoryUseCase = container.resolve(CreateCategoryUseCase)
    
        await createCategoryUseCase.execute({ name, description, icon  })
    
        return response.status(201).send();
    }
}

export { CreateCategorycontroller };
