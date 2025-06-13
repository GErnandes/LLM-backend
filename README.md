
# ⚙️ Consulta LLM - Backend (Node.js Express)

API backend para consultar uma LLM gratuita, manter contexto da conversa e responder mensagens do cliente.

---

## 📱 Funcionalidades

- Recebe mensagens via POST
- Consulta LLM externa (ex: OpenAI)
- Mantém contexto por sessão
- Responde com texto gerado pela LLM
- CORS habilitado para comunicação com frontend

---

## 🚀 Tecnologias usadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [cors](https://github.com/expressjs/cors)
- [dotenv](https://github.com/motdotla/dotenv)
- Fetch API (node-fetch ou nativo)

---

## 📂 Estrutura

```
.
├── index.js
├── package.json
├── .env
```

---

## ⚙️ Como rodar

1. Instale as dependências:

```bash
npm install
```

2. Crie o arquivo `.env` com sua chave:

```
OPENAI_API_KEY=sua_chave_aqui
PORT=3000
```

3. Inicie o servidor:

```bash
node index.js
```

4. A API ficará disponível em:

```
http://localhost:3000
```

---

## 🌐 Endpoints

### POST `/chat`

Recebe JSON:

```json
{
  "message": "texto da mensagem",
  "sessionId": "id_unico_sessao"
}
```

Retorna JSON:

```json
{
  "response": "texto gerado pela LLM"
}
```

---

## 📌 Observações

- Ajuste o IP para acessar de dispositivos externos.
- Verifique firewall e permissões de rede.
- Garanta que a chave da API está válida.

---

## 📞 Suporte

Dúvidas ou problemas? Abra uma issue ou entre em contato com o desenvolvedor.

---

Feito com ❤️ por José Fernando
