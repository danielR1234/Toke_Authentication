import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1642459148402 implements MigrationInterface {
    name = 'migration1642459148402'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user"
                RENAME COLUMN "KrankenKasse" TO "Krankenkasse"
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user"
                RENAME COLUMN "Krankenkasse" TO "KrankenKasse"
        `);
    }

}
