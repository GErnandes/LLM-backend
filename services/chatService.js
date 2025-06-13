import axios from 'axios'

// Armazena o histórico por sessão
const sessionContexts = {}

const SYSTEM_PROMPT = `
Você é um atendente de suporte técnico de uma empresa de informática.
Responda de forma clara e objetiva sobre problemas com computador, internet, impressoras e software.
Se não souber, oriente o usuário a procurar o suporte especializado.
`

async function handleMessage(sessionId, userMessage) {
  if (!sessionContexts[sessionId]) {
    sessionContexts[sessionId] = [
      { role: "system", content: SYSTEM_PROMPT }
    ]
  }

  const context = sessionContexts[sessionId]

  context.push({ role: "user", content: userMessage })

  const response = await axios.post(
    'https://openrouter.ai/api/v1/chat/completions',
    {
      model: "openai/gpt-3.5-turbo",
      messages: context,
      max_tokens: 500,
    },
    {
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
      }
    }
  )

  const assistantMessage = response.data.choices[0].message.content
  context.push({ role: "assistant", content: assistantMessage })

  // Mantém o histórico até 10 interações
  if (context.length > 20) context.splice(1, 2)

  return assistantMessage
}

export default { handleMessage }
