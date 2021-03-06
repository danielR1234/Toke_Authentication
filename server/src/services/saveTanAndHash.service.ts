import { genRandomTan, saveMd5Hash, saveRandomTan } from '../utils'
import { sendTan } from './sendTan.service'

export const saveTanAndHash = async (Token: string, Mailadresse: string) => {
  const tan = genRandomTan()
  await saveRandomTan(tan, Token)
  const updatedUser = saveMd5Hash(tan, Token)
  await sendTan(tan, Mailadresse)
  return updatedUser
}
