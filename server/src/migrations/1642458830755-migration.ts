import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1642458830755 implements MigrationInterface {
    name = 'migration1642458830755'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user"
                RENAME COLUMN "Steurklasse" TO "Steuerklasse"
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user"
                RENAME COLUMN "Steuerklasse" TO "Steurklasse"
        `);
    }

}
