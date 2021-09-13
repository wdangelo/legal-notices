import { Router } from "express";

import { CategopriesRepositories } from "../modules/Notices/repositories/CategoriesRepositories";
import { CreateCategoryService } from "../modules/Notices/services/CreateCategoryService";


const categoriesRoutes = Router();

const categoriesRepositories = new CategopriesRepositories();

categoriesRoutes.post("/", (request, response) => {
    const { name, title } = request.body;

    const createCategoryServie = new CreateCategoryService(categoriesRepositories);

    createCategoryServie.execute({ name, title })

    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    const categories = categoriesRepositories.list();

    return response.json(categories);
})

export { categoriesRoutes };
