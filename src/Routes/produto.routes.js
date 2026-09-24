import express from 'express'
import ProdutoServices from '../services/produto.services.js'

const produtoRouter = express.Router()
const produtoService = new ProdutoServices()

produtoRouter.get('/', async (req, res) => {
    const produtos = await produtoService.getTudo()
    return res.json(produtos)
})

produtoRouter.post('/', async (req, res) => {
    const produto = await produtoService.create(req.body)
    return res.status(201).json(produto)
})

export default produtoRouter