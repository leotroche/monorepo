import cors from 'cors'
import express, { json } from 'express'
import { PORT } from './config/env'

const app = express()

app.use(cors())
app.use(json())

app.get('/api', (_, res) => {
  res.status(200).json({ message: 'Express + TS' })
})

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
