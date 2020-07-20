#!/usr/bin/env node

const knex = require('knex');
require('./connection');

const db = knex({
    client: 'mysql',
    connection: {
        host: DB_HOST,
        port: DB_PORT,
        user: DB_USER,
        database: DB_NAME,
        password: DB_PASSWORD
    }
});

module.exports = db;