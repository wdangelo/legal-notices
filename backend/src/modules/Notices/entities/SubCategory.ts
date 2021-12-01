import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("sub-categories")
class SubCategory {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    categorie_id: string;

    @CreateDateColumn()
    updated_at: Date;


    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { SubCategory };