import { User } from './../../entities/User'
import { Response } from 'express'
import { UserRequest } from '../../types/interfaces'
import { getConnection } from 'typeorm'
import { saveTanAndHash } from '../../services'
import { genRandomTan, saveRandomTan, saveMd5Hash } from '../../utils'

export const postEmail = async (req: UserRequest, res: Response) => {
  try {
    const { Mailadresse, Token } = req.body
    const user = await User.findOne(Token)

    if (user) {
      if (user?.Mailadresse) {
        res.status(200).json({ message: 'You already have an Email address' })
      } else {
        await getConnection()
          .createQueryBuilder()
          .update(User)
          .set({
            Mailadresse,
          })
          .where('Token = :Token', { Token })
          .returning('*')
          .execute()

        const updatedUser = await saveTanAndHash(Token, Mailadresse)
        res.status(200).json(updatedUser)
      }
    } else {
      res.status(404).json({ error: 'User with that Token does not exists' })
    }
  } catch (err) {
    res.status(404).json(err.message)
  }
}
