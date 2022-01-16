import { Response } from 'express'
import { User } from '../../entities/User'
import { UserRequest } from '../../types/interfaces/user-request.interface'

export const getUser = async (req: UserRequest, res: Response) => {
  const { Token } = req.params
  const user = await User.findOne(Token)

  if (user) {
    return res.status(200).json({ user: user })
  } else {
    return res.status(404).json({
      message: 'User does not exist',
    })
  }
}
