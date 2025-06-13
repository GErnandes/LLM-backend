import express from 'express'
import dotenv from 'dotenv'
import chatService from './services/chatService.js'
import cors from 'cors'


dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

// Endpoint de chat com contexto
app.post('/chat', async (req, res) => {
  const { message, sessionId } = req.body
  if (!message || !sessionId) {
    return res.status(400).json({ error: 'message e sessionId são obrigatórios' })
  }

  try {
    const reply = await chatService.handleMessage(sessionId, message)
    res.json({ response: reply })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Erro ao processar a resposta do modelo.' })
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
