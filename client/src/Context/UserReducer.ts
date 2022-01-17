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
        user: {
          ...state.user,
          Token: action.payload.Token,
        },
      }
    case Types.SET_USER:
      console.log('hallo')
      return {
        ...state,
        authenticating: false,
        authenticated: true,
        user: action.payload.user,
      }
    case Types.SET_AUTHENTICATING:
      return {
        ...state,
        authenticating: action.payload.value,
      }
    default:
      return state
  }
}
