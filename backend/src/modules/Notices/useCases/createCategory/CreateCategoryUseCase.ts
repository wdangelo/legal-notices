import { CategopriesRepositories } from "../../repositories/implementations/CategoriesRepositories"

interface IRequest {
    name: string;
    title: string;
    path: string
}

class CreateCategoryUseCase {
    constructor(private categoriesRepositories: CategopriesRepositories){}
    execute({ name, title, path }: IRequest): void {
        const categoryAlreadyExists = this.categoriesRepositories.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category Already exists!");
        }
    
        this.categoriesRepositories.create({ name, title, path });
    }
}

export { CreateCategoryUseCase }