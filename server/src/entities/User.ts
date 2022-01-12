import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn({ unique: true, nullable: false, length: 45 })
  Token!: string
  @Column({ default: null })
  Mailadresse: string
  @Column({ default: null })
  Tan: number
  @Column({ default: null })
  Hash: string
  @Column({ default: null, length: 45 })
  IBAN: string
  @Column({ default: null })
  KrankenKasse: string
  @Column({ default: null })
  Sozialversicherungsnummer: string
  @Column({ default: null, length: 45 })
  Steurklasse: string
  @Column({ default: null })
  Steueridentifikationsnummer: string
  @Column({ default: null })
  Kirchensteuerpflichtig: string
}
