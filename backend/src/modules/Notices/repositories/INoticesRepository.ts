import { Notices } from "../model/Notices";

interface ICreateNoticesDTO {
    title: string;
}

interface INoticesRepository {
    create({ title }: ICreateNoticesDTO): void;
    findByTitle(title: string): Notices;
}

export { ICreateNoticesDTO, INoticesRepository };