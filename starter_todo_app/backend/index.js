const express = require('express');
const cors = require('cors');
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'db-container',
    database: 'todo_app_db',
    password: 'docker',
    port: 5432,
})

const app = express();
app.use(cors())
app.use(express.json())

app.get('/', (req, response) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.send('Hi There')
});

app.get('/api/todos', (request, response) => {
    response.header('Access-Control-Allow-Origin', '*');
    pool.query('SELECT * FROM todos ORDER BY id ASC', (error, results) => {
        if (error) throw error;

        console.log(results)
        response.status(200).json(results.rows)
    })
})

app.post('/api/todos', (request, response) => {
    response.header('Access-Control-Allow-Origin', '*');
    const { title, done } = request.body

    pool.query('INSERT INTO todos (title, done) VALUES ($1, $2) RETURNING *', [title, done], (error, results) => {
        if (error) throw error;
        console.log(results)
        response.status(201).send(`Todo added with ID: ${results.rows[0].id}`)
    })
});

app.get('/api/todos/:id', (request, response) => {
    const id = parseInt(request.params.id)
    response.header('Access-Control-Allow-Origin', '*');
    pool.query('SELECT * FROM todos WHERE id = $1', [id], (error, results) => {
        if (error) throw error;
        response.status(200).json(results.rows)
    })
});

app.delete('/api/todos/:id', (request, response) => {
    const id = parseInt(request.params.id)
    response.header('Access-Control-Allow-Origin', '*');
    pool.query('DELETE FROM todos WHERE id = $1', [id], (error, results) => {
        if (error) throw error;
        response.status(204).send(`Todo deleted with ID: ${id}`)
    })
});

app.put('/api/todos/:id', (request, response) => {
    const id = parseInt(request.params.id)
    const { title, done } = request.body
    response.header('Access-Control-Allow-Origin', '*');
    pool.query(
        'UPDATE todos SET title = $1, done = $2 WHERE id = $3',
        [title, done, id],
        (error, results) => {
            if (error) throw error;
            response.status(200).send(`Todo modified with ID: ${id}`)
        })
});


app.listen('3001', () => { })