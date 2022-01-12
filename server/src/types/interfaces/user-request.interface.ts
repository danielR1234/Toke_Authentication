import { User } from '../../entities/User'
import { IRequest } from '.'
import { DeepPartial, FindManyOptions } from 'typeorm'

export interface UserRequest extends IRequest {
  body: User
}
