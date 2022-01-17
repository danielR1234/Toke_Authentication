export type FormValues = {
  Token: string
}
export type User = {
  Token: string | null
  Mailadresse: string | null
  Tan: number | null
  Hash: string | null
  IBAN: string | null
  Krankenkasse: string | null
  Sozialversicherungsnummer: string | null
  Steueridentifikationsnummer: string | null
  Kirchensteuerpflichtig: string | null
  Steuerklasse: string | null
}

export type UserType = {
  authenticating: boolean
  authenticated: boolean
  user: User
}

export type InitialStateType = {
  user: UserType
}
