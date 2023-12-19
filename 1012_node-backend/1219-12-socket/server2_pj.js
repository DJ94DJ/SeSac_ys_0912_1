const express = require("express");
const http = require("http");
const app = express();
// http랑 app를 연결하는 과정
// socket이 http모듈로 생성된 서버에서만 동작함
const server = http.createServer(app);
const PORT = 8001;

const io = require("socket.io")(server);
// 풀어쓰면
// const Socket = require("socket.io")
// const id = Socket(server)

app.set("view engine", "ejs");
app.use(express.json());

app.get("/", function (req, res) {
  res.render("client2");
});

// 이 이벤트로 소켓 연결
io.on("connection", (socket) => {
  // 콜백함수의 매개변수에 들어간 socket 객채는..
  // 접속한 클라이언트의 소켓
  console.log("소켓 아이디는 다음과 같아요:", socket.id);

  // on을 이용해 클라이언트에서 socket을 이용해
  // 보내준 데이터를 받을 이벤트 등록함.
  socket.on("hello", (res) => {
    console.log(res);
    io.emit("msg", { msg: res.msg });
  });

  socket.on("entry", (res) => {
    console.log(res);
    io.emit("msg", { msg: res.msg });
  });

  socket.on("bye", (res) => {
    console.log(res);
    io.emit("msg", { msg: res.msg });
  });
});

server.listen(PORT, function () {
  console.log(`Server Open : ${PORT}`);
});
