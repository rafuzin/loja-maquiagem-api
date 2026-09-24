import express from 'express'
import produtoRouter from './routes/produto.routes.js'

const server = express()

server.use(express.json())

server.get('/health', (req, res) => {
    res.json({
        status: 'Tá fucionando meu parceiro'
    })
})

server.use('/produtos', produtoRouter)

server.listen(3000, () => {
    console.log('ta rodando pae lá no http://localhost:3000')
})