import { CategopriesRepositories } from "../../repositories/implementations/CategoriesRepositories";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = CategopriesRepositories.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listcategoriesController = new ListCategoriesController(listCategoriesUseCase);

export { listcategoriesController };