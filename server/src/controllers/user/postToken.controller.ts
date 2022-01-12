import { Response } from 'express'
import { saveTanAndHash } from '../../services'
import { UserRequest } from '../../types/interfaces'
import { User } from './../../entities'
import { genRandomTan, saveRandomTan, saveMd5Hash } from '../../utils'

export const postToken = async (req: UserRequest, res: Response) => {
  try {
    const { Token } = req.body
    const user = await User.findOne(Token)

    if (user?.Mailadresse) {
      // User already exists and has an Email address
      const updatedUser = await saveTanAndHash(Token, user.Mailadresse)
      console.log('uuu', updatedUser)
      return res.status(200).json(updatedUser)
    } else {
      if (!user) {
        // new User without an Email address
        const newUser = await User.create({ Token: Token }).save()
        if (newUser) {
          return res.status(200).json({ message: 'Please provide your Email' })
        } else {
          res.status(404).json({ error: 'Something went wrong' })
        }
      } else {
        // user exists but without an Email
        return res.status(200).json({ message: 'Please provide your Email' })
      }
    }
  } catch (err) {
    res.status(404).json(err.message)
  }
}
