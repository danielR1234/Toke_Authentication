import { UserType } from './types'

export interface Data {
  error?: string
  message?: string
  user: UserType
}

export interface Response {
  data: Data
}
