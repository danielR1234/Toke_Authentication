import { Response } from 'express'
import { getConnection } from 'typeorm'
import { saveTanAndHash } from '../../services'
import { UserRequest } from '../../types/interfaces'
import { User } from './../../entities/User'

export const postEmail = async (req: UserRequest, res: Response) => {
  try {
    const { Mailadresse, Token } = req.body
    const user = await User.findOne(Token)

    if (user) {
      if (user?.Mailadresse) {
        res.status(200).json({ error: 'You already have an Email address' })
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
        res.status(200).json({ user: updatedUser })
      }
    } else {
      res.status(200).json({ error: 'User with that Token does not exists' })
    }
  } catch (err) {
    res.status(404).json(err.message)
  }
}
