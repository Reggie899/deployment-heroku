const express = require('express');

require('dotenv').config();
const PORT = process.env.PORT;

const server = express();
server.listen(PORT, () => { console.log("server listening on port", PORT); });

server.use((req, res, next) => {
    console.log("received request:", req.method, req.url);
    next();
});

server.get('/', (req, res) => {
    res.status(200).send('hello world');
});
