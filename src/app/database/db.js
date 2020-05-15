const knex = require('knex');

const db = knex({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'd3s3nv',
        database: 'controle_tarefas'
    }
});

module.exports = db;