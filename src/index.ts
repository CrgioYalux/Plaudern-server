const express = require('express');
const app = express();
const server = require('http').Server(app);
const PORT:number = Number(process.env.PORT) || 4000;
const io = require('socket.io')(server);
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send({ message: 'server is working' });
});

io.on('connect', (socket) => {
  console.log('a connection');

  socket.on('disconnect', () => {
    console.log('a disconnection');
  });
});

server.listen(PORT, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server running on localhost:${PORT}`);
});