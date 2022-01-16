import { IRequest } from '.'
import { User } from '../../entities/User'

export interface UserRequest extends IRequest {
  body: User
  params: { Token: string }
}
