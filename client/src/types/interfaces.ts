export interface User {
  Token: string | null
  Mailadresse: string | null
  Tan: number | null
  Hash: string | null
  IBAN: string | null
  Krankenkasse: string | null
  Sozialversicherungsnummer: string | null
  Steuerklasse: string | null
  Steueridentifikationsnummer: string | null
  Kirchensteuerpflichtig: string | null
}

export interface Data {
  error?: string
  message?: string
  user: User
}

export interface Response {
  data: Data
}
