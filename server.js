const express = require('express');
 
const server = express();

const projectRouter = require('./data/Routes/projectRouter.js');
const actionsRouter = require('./data/Routes/actionsRouter.js');


server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionsRouter);

server.get('/', (req, res) => {
    res.status(200).json({
        Message: 'Welcome'
    })
})

module.exports = server;
