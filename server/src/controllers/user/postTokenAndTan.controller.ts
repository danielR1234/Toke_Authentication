import { geneRateMd5Hash, saveMd5Hash } from '../../utils/saveMd5Hash'
import { User } from '../../entities/User'
import { UserRequest } from '../../types/interfaces/user-request.interface'
import { Response } from 'express'

export const postTokenAndTan = async (req: UserRequest, res: Response) => {
  const { Tan, Token } = req.body
  const user = await User.findOne(Token)

  if (user?.Mailadresse) {
    if (user.Hash === geneRateMd5Hash(Tan, Token)) {
      return res.status(200).json(true)
    } else {
      return res.status(404).json({
        error: 'Invalid credentials',
      })
    }
  } else {
    return res.status(404).json({
      message: 'User does not exist or User has not provided an Email',
    })
  }
}
