import { Category } from "../model/Category";

interface ICategoryDTO {
    name: string;
    title: string;
    path: string
}

interface ICategoriesRepository {
    findByName(name: string): Category;
    list(): Category[];
    create({name, title}: ICategoryDTO): void;

}

export { ICategoryDTO, ICategoriesRepository };
