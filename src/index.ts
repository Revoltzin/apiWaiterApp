import express from 'express'
import mongoose from 'mongoose'
import { router } from './router.js'

const app = express()
const port = 3000

app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`🎸 Server is running on http://localhost:${port}`)
})

// MongoDB separado
mongoose.connect('mongodb://localhost:27017')
  .then(() => console.log('✅ MongoDB conectado'))
  .catch((err) => console.log('❌ Erro ao conectar no MongoDB:', err.message))
