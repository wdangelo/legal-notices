import { CategopriesRepositories } from "../../repositories/implementations/CategoriesRepositories";
import { CreateCategorycontroller } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository =  CategopriesRepositories.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategorycontroller(createCategoryUseCase);

export { createCategoryController }