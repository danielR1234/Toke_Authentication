import { createTestAccount, createTransport } from 'nodemailer'

export const sendTan = async (tan: number, email: string) => {
  let testAccount = await createTestAccount()

  let transporter = createTransport({
    service: 'Gmail',
    auth: {
      user: 'testviscom123@gmail.com',
      pass: 'viscom123',
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
