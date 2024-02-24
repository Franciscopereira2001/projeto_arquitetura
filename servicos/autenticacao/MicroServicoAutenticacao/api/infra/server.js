import express from 'express'
import authRouters from '../routes/routes.js';

const app = express()
// aqui é o middleware que vai fazer o parse do corpo da requisição em json
// ele ja faz aquilo do unmarsal do json automaticamente com o body-parser
app.use(express.json())

app.use('/auth',authRouters)

export default app;