import express from 'express'
import ProdutoServices from '../services/produto.service.js'

const produtoRouter = express.Router()
const produtoService = new ProdutoServices()

produtoRouter.get('/', async (req, res) => {
    const produtos = await produtoService.getAll()
    return res.json(produtos)
})

produtoRouter.post('/', async (req, res) => {
    const produto = await produtoService.create(req.body)
    return res.status(201).json(produto)
})

export default produtoRouter