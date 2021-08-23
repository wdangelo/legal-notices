import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAgencies1629747287969 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "agencies",
        columns: [
          {
            name: "id",
            type: "uuid"
          },
          {
            name: "name",
            type: "varchar"
          },
          {
            name: "address",
            type: "varchar"
          },
          {
            name: "attendance_point",
            type: "varchar"
          },
          {
            name: "telephone",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()"
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
