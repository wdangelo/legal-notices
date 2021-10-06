import { response, Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/Notices/useCases/createCategory";
import { importCategoryController } from "../modules/Notices/useCases/importCategory";
import { listcategoriesController } from "../modules/Notices/useCases/listCategories";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp"
})

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listcategoriesController.handle(request, response)
})

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response)
})

export { categoriesRoutes };
