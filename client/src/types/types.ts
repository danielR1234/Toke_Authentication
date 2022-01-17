export type FormValues = {
  Token: string
}
export type User = {
  Token: string | null
  Mailadresse: string | null
  Tan: number | null
  Hash: string | null
  IBAN: string | null
  KrankenKasse: string | null
  Sozialversicherungsnummer: string | null
  Steurklasse: string | null
}

export type UserType = {
  authenticated: boolean
  user: User
}

export type InitialStateType = {
  user: UserType
}
