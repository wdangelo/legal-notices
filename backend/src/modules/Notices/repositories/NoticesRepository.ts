import { Notices } from "../model/Notices";
import { ICreateNoticesDTO, INoticesRepository } from "./INoticesRepository";

class NoticesRepository implements INoticesRepository {
    private notices: Notices[];

    constructor() {
        this.notices = []
    }
    create({ title }: ICreateNoticesDTO): void {
        const notice = new Notices();

        Object.assign(notice, {
            title,
            created_at: new Date(),
            updated_at: new Date(),
        });

        this.notices.push(notice)
    }
    findByTitle(title: string): Notices {
        const notice = this.notices.find(notice => notice.title === title)

        return notice
    }

}

export { NoticesRepository }