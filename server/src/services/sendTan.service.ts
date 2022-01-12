import nodemailer, { createTestAccount, createTransport } from 'nodemailer'
import 'dotenv-safe/config'

export const sendTan = async (tan: number, email: string) => {
  let testAccount = await createTestAccount()

  let transporter = createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>',
    to: email,
    subject: 'Hello ✔',
    text: 'Your Tan',
    html: `<b>Your Tan ${tan} </b>`,
  })
}
