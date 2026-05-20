import path from 'node:path'
import { fileURLToPath } from 'url'
import express from 'express'
import mongoose from 'mongoose'
import { router } from './router.js'
import cors from 'cors'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = 3000

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(cors())
app.use(express.json())
app.use(router)

mongoose.connect('mongodb://localhost:27017/waiterapp')
  .then(() => {
    console.log('✅ MongoDB conectado')
    app.listen(port, () => {
      console.log(`🎸 Server is running on http://localhost:${port}`)
    })
  })
  .catch((err) => console.log('❌ Erro ao conectar no MongoDB:', err.message))
