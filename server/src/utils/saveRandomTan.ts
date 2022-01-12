import { User } from '../entities'
import { getConnection } from 'typeorm'

export const genRandomTan = () => {
  return Math.floor(Math.random() * 1000)
}

export const saveRandomTan = async (tan: number, Token: string) => {
  await getConnection()
    .createQueryBuilder()
    .update(User)
    .set({
      Tan: tan,
    })
    .where('Token = :Token', { Token })
    .returning('*')
    .execute()
}
