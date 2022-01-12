import express from 'express'
import user from './routes/userRoutes'
import { createConnection } from 'typeorm'
import 'dotenv-safe/config'

const main = async () => {
  const connection = await createConnection()
  await connection.runMigrations()
  const app = express()

  // parse form data
  app.use(express.urlencoded({ extended: false }))
  // parse json
  app.use(express.json())

  app.use('/user', user)

  app.listen(process.env.PORT, () => {
    console.log(`Server starten on port ${process.env.PORT}`)
  })
}

main().catch((err) => {
  console.error('error main index.js', err)
})
