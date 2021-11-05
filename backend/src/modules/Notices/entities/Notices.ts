import { v4 as uuidV4 } from "uuid";

class Notices {
    id?: string
    title: string
    createad_at: Date;
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Notices };