import { UserType } from '../types/types'
import { Types, UserPayload } from './Types'

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}

export type UserActions = ActionMap<UserPayload>[keyof ActionMap<UserPayload>]

export const UserReducer = (state: UserType, action: UserActions) => {
  switch (action.type) {
    case Types.SET_TOKEN:
      return {
        ...state,
        Token: action.payload.Token,
      }
    case Types.SET_USER:
      return {
        ...state,
        state: action.payload.user,
      }

    default:
      return state
  }
}
