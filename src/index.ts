import express from 'express';

const app = express();
const server = require('http').Server(app);
const PORT:number = Number(process.env.PORT) || 4000;

app.get('/', (req, res) => {
  res.status(200).send({ message: 'server is working' });
});

server.listen(PORT, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server running on localhost:${PORT}`);
});