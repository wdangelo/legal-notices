import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICategoryDTO } from "../ICategoriesRepository";


class CategoriesRepositories implements ICategoriesRepository{ 

    private repository: Repository<Category>;

    constructor () {
        this.repository = getRepository(Category);
    }


    async create({ name, description, icon }: ICategoryDTO ): Promise<void >{
        const category = this.repository.create({
            name,
            description,
            icon,
        })
        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        const categories = this.repository.find();
        return categories
    }

    async findByName(name: string): Promise<Category> {
        const category = this.repository.findOne({ name })

        return category;
    }
}

export { CategoriesRepositories };
