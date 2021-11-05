import { Category } from "../entities/Category";

interface ICategoryDTO {
    name: string;
    description: string;
    icon: string
}

interface ICategoriesRepository {
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create({name, description, icon}: ICategoryDTO): Promise<void>;

}

export { ICategoryDTO, ICategoriesRepository };
