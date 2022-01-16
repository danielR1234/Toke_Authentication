import { UserType } from './../types/types'
export enum Types {
  SET_TOKEN = 'SET_TOKEN',
  SET_USER = 'SET_EMAIL',
}

export type UserPayload = {
  [Types.SET_TOKEN]: {
    Token: string | null
  }
  [Types.SET_USER]: {
    user?: UserType
  }
}
