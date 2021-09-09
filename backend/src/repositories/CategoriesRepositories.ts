import { Category } from "../model/Category";

interface ICategoryDTO {
    name: string;
    title: string
}

class CategopriesRepositories { 
    private categories: Category[];

    constructor () {
        this.categories = []
    }

    create({ name, title }: ICategoryDTO ): void {
        const category = new Category();

        Object.assign(category, {
            name,
            title,
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
