import { Notices } from "../entities/Notices";

interface ICreateNoticesDTO {
    title: string;
}

interface INoticesRepository {
    create({ title }: ICreateNoticesDTO): void;
    findByTitle(title: string): Notices;
}

export { ICreateNoticesDTO, INoticesRepository };