import { CategopriesRepositories } from "../repositories/CategoriesRepositories";

interface IRequest {
    name: string;
    title: string;
}

class CreateCategoryService {
    constructor(private categoriesRepositories: CategopriesRepositories){}
    execute({ name, title }: IRequest): void {
        const categoryAlreadyExists = this.categoriesRepositories.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category Already exists!");
        }
    
        this.categoriesRepositories.create({ name, title });
    }
}

export { CreateCategoryService }