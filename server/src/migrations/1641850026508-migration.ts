import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1641850026508 implements MigrationInterface {
    name = 'migration1641850026508'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "user" (
                "Token" character varying(45) NOT NULL,
                "Mailadresse" character varying,
                "Tan" integer,
                "Hash" character varying,
                "IBAN" character varying(45),
                "KrankenKasse" character varying,
                "Sozialversicherungsnummer" character varying,
                "Steurklasse" character varying(45),
                "Steueridentifikationsnummer" character varying,
                "Kirchensteuerpflichtig" character varying,
                CONSTRAINT "PK_7f0bc9f9de7c7afa52f4f577318" PRIMARY KEY ("Token")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "user"
        `);
    }

}
