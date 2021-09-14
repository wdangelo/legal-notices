import { INoticesRepository } from "../repositories/INoticesRepository";

interface IRequest {
    title: string;
}

class CreateNoticesService {
    constructor(private noticesRepository: INoticesRepository) {}
    execute({title}: IRequest): void {
        const noticesAlreadyExists = this.noticesRepository.findByTitle(title);

        if (noticesAlreadyExists) {
            throw new Error("Notices already exists!");
        }

        this.noticesRepository.create({ title })
    }
}

export { CreateNoticesService };
