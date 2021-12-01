import { Router } from "express";
import multer from "multer";
import "reflect-metadata";

import uploadConfig from "../config/uploads";
import { CreateCategorycontroller } from "../modules/Notices/useCases/createCategory/CreateCategoryController";
import { ListCategoriesController } from "../modules/Notices/useCases/listCategories/ListCategoriesController";

const categoriesRoutes = Router();

const uploadCategories = multer(uploadConfig.upload("./tmp/icons"));

const createCategoryController = new CreateCategorycontroller()
const listCategoriesController = new ListCategoriesController()

categoriesRoutes.post("/", uploadCategories.single("icon"), createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle)


export { categoriesRoutes };
