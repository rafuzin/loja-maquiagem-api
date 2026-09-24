import pool from '../config/db.js'

class ProdutoServices {

    async getAll() {
        const res = await pool.query('SELECT * FROM produtos')
        return res.rows
    }

    async create(dados) {
        const { nome, marca, categoria, preco, quantidade_estoque } = dados

        const res = await pool.query(
            'INSERT INTO produtos (nome, marca, categoria, preco, quantidade_estoque) VALUES ($1, $2, $3, $4) RETURNING *',
            [nome, marca, categoria, preco, quantidade_estoque]
        )

        return res.rows[0]
    }
}

export default ProdutoServices