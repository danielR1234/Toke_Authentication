export type FormValues = {
  Token: string
}

export type InitialStateType = {
  user: UserType
}

export type UserType = {
  Token: string | null
  Mailadresse: string | null
  Tan: number | null
  Hash: string | null
  IBAN: string | null
  KrankenKasse: string | null
  Sozialversicherungsnummer: string | null
  Steurklasse: string | null
}
