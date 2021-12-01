import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
    icon: string;
}

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoriesRepositories")
        private categoriesRepositories: ICategoriesRepository){}
        
    async execute({ name, description, icon}: IRequest): Promise<void> {
        const categoryAlreadyExists = await this.categoriesRepositories.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category Already exists!");
        }
    
        await this.categoriesRepositories.create({ name, description, icon });
    }
}

export { CreateCategoryUseCase }