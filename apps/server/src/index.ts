import { env } from '@/config/env'
import cors from 'cors'
import express, { json } from 'express'

const app = express()

app.use(cors())
app.use(json())

app.get('/api', (_, res) => {
  res.status(200).json({ message: 'Express + TS' })
})

app.listen(env.PORT, () => {
  console.log(`Listening on http://localhost:${env.PORT}`)
})
