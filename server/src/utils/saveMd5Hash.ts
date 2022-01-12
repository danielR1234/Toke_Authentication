import { User } from '../entities'
import { getConnection } from 'typeorm'
import md5 from 'md5'

export const saveMd5Hash = async (Tan: number, Token: string) => {
  return await getConnection()
    .createQueryBuilder()
    .update(User)
    .set({
      Hash: geneRateMd5Hash(Tan, Token),
    })
    .where('Token = :Token', { Token })
    .returning('*')
    .execute()
}

export const geneRateMd5Hash = (Tan: number, Token: string) => {
  return md5(Tan!.toString() + Token)
}
