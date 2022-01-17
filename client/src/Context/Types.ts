import { User } from './../types/types'

export enum Types {
  SET_TOKEN = 'SET_TOKEN',
  SET_USER = 'SET_EMAIL',
  SET_AUTHENTICATING = 'SET_AUTHENTICATING',
}

export type UserPayload = {
  [Types.SET_TOKEN]: {
    Token: string
  }
  [Types.SET_USER]: {
    user: User
  }
  [Types.SET_AUTHENTICATING]: { value: boolean }
}
