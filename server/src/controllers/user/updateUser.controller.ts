import { Response } from 'express'
import { getConnection } from 'typeorm'
import { User } from '../../entities/User'
import { UserRequest } from '../../types/interfaces/user-request.interface'

export const updateUser = async (req: UserRequest, res: Response) => {
  const {
    IBAN,
    Kirchensteuerpflichtig,
    Krankenkasse,
    Mailadresse,
    Sozialversicherungsnummer,
    Steueridentifikationsnummer,
    Steuerklasse,
    Token,
  } = req.body
  const user = await User.findOne(Token)

  if (user) {
    const updatedUser = await getConnection()
      .createQueryBuilder()
      .update(User)
      .set({
        IBAN,
        Kirchensteuerpflichtig,
        Krankenkasse,
        Mailadresse,
        Sozialversicherungsnummer,
        Steueridentifikationsnummer,
        Steuerklasse,
      })
      .where('Token = :Token', { Token })
      .returning('*')
      .execute()

    return res.status(200).json({ user: updatedUser.raw[0] })
  } else {
    return res.status(404).json({
      message: 'User does not exist',
    })
  }
}
