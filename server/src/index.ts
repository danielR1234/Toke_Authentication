import cors from 'cors'
import express from 'express'
import { createConnection } from 'typeorm'
import user from './routes/userRoutes'

const main = async () => {
  const connection = await createConnection()
  await connection.runMigrations()
  const app = express()

  // parse form data
  app.use(express.urlencoded({ extended: false }))
  // parse json
  app.use(express.json())
  app.use(cors())
  app.use('/user', user)

  app.listen(4000, () => {
    console.log(`Server starten on port ${4000}`)
  })
}

main().catch((err) => {
  console.error('error main index.js', err)
})
