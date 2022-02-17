const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const path = require('path');

app.use(express.static(path.join(__dirname, '/front')));

//sends data to new requests
app.get('/', (req, res) => {
    console.log('/')
    res.sendFile(__dirname);
});
app.get('/close', (req, res) => {
    console.log('Process terminated')
    process.kill(process.pid, 'SIGTERM');
});

io.on('connection', (socket) => { //first time connection
    console.log("A user has connected: " + socket.id);
});

server.listen(3000, () => {
    console.log('listening on *:3000');
    console.log('Dir: ' + __dirname);
});




