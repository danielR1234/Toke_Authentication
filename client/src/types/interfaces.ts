export interface User {
  Token: string | null
  Mailadresse: string | null
  Tan: number | null
  Hash: string | null
  IBAN: string | null
  KrankenKasse: string | null
  Sozialversicherungsnummer: string | null
  Steurklasse: string | null
}

export interface Data {
  error?: string
  message?: string
  user: User
}

export interface Response {
  data: Data
}
