import { Category } from "../../model/Category";
import { ICategoriesRepository, ICategoryDTO } from "../ICategoriesRepository";


class CategopriesRepositories implements ICategoriesRepository{ 
    private categories: Category[];

    private static INSTANCE: CategopriesRepositories;

    constructor () {
        this.categories = []
    }

    public static getInstance(): CategopriesRepositories {
        if(!CategopriesRepositories.INSTANCE) {
            CategopriesRepositories.INSTANCE = new CategopriesRepositories();
        }
        return CategopriesRepositories.INSTANCE;
    }

    create({ name, title, path }: ICategoryDTO ): void {
        const category = new Category();

        Object.assign(category, {
            name,
            title,
            path,
            created_at: new Date(),
            updated_at: new Date(),
        })

        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        const category = this.categories.find((category) => category.name === name);

        return category;
    }
}

export { CategopriesRepositories };
