import pg from 'pg'
const { Pool } = pg

import 'dotenv/config'

const pool = new Pool()

pool.on('error', (err, Produtos) => {
    console.error('Unexpected error on idle Produtos', err)
    process.exit(-1)
})

export default pool