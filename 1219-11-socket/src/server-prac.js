const http = require("http");
const express = require("express");
const app = express();

// socket이 http모듈로 생성된 서버에서만 동작함
const server = http.createServer(app);
const PORT = 8000;

const io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log("socket id:", socket.io);
});

server.listen(PORT, function () {
  console.log(`Server Open : ${PORT}`);
});
