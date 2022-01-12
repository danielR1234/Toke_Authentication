import { User } from './../entities/User'
import { genRandomTan, saveRandomTan, saveMd5Hash } from '../utils'
import { sendTan } from './sendTan.service'

export const saveTanAndHash = async (Token: string, Mailadresse: string) => {
  const tan = genRandomTan()
  await saveRandomTan(tan, Token)
  await saveMd5Hash(tan, Token)
  await sendTan(tan, Mailadresse)
}
