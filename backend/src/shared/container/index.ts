import { container } from "tsyringe";
import { ICategoriesRepository } from "../../modules/Notices/repositories/ICategoriesRepository";
import { CategoriesRepositories } from "../../modules/Notices/repositories/implementations/CategoriesRepositories";



container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepositories",
    CategoriesRepositories
);
