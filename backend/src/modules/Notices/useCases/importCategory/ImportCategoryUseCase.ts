import fs from "fs";

import csvParse from "csv-parse";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ImportCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}
    

    execute(file: Express.Multer.File): void {

        const {filename, path} = file

        
        
        console.log(filename, path)

        

    }
}

export { ImportCategoryUseCase };