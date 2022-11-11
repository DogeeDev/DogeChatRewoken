const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static('assets'))
app.set('view engine', 'ejs')
app.set('views', __dirname+"/views")
app.get('/', (req, res) => {
  res.render('index.ejs');
});

server.listen(3000, () => {
  console.log('ready');
});