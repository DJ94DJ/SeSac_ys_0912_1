const http = require("http");
const express = require("express");
const app = express();
// socket이 http모듈로 생성된 서버에서만 동작함
const server = http.createServer(app);
const PORT = 8000;

const cors = require("cors");
app.use(cors());

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const userIdArr = {};
// {socket.id : "userId", ~~} 소켓 아이디를 기준으로 키 밸류 만들기

io.on("connection", (socket) => {
  console.log("socket id:", socket.id);

  // 실습 3번에 이용함 : 소켓 id를 이용해 입장공지
  // io.emit("notice", { msg: `${socket.id}님이 입장했습니다.` });

  // 실습 3-1 이벤트 : 입장시 받은 아이디로 user Id로 입장공지
  socket.on("entry", (res) => {
    const { userId } = res;

    // **여기서 실습 3-2 : 닉네임이 중복되는 지에 따라 정상적으로 노티스를 하거나 아니면 오류 띄우기 중복된다는 오류 띄우기 (여기서 에러아님 석쎄스를 보내야함)
    // "socket.id": "userIda" "socket.id": "userIdb" "socket.id": "userIdc"
    // object.values(userIdArr) => ["userIda", "userIdb", "userIdc"]
    // 문자열이나 배열에서 인자로 넘겨준 값이 존재하는지 안하는 지 찾을 수 있음
    // indexOf : 배열에서 인자로 넘겨준 값의 인덱스를 추출, 없다면 -1을 반환함수
    // socket.emit => 브라우저 콘솔에 나옴
    // console.log => 터미널 콘솔에 나옴
    // io.emit => 채팅방 내 공지로 나옴

    const isDuplicateId = Object.values(userIdArr).includes(userId);

    if (isDuplicateId) {
      // 중복된 아이디일 경우 실패를 클라이언트로 전송
      socket.emit("entry-failed", {
        msg: "입장 실패 : 아이디가 이미 사용 중입니다.🫠",
      });
      console.log(
        `중복 아이디 [${userId}] 확인됨 🫠, 현재 입장 리스트`,
        userIdArr
      );
    } else {
      // 중복되지 않은 아이디일 경우 성공을 클라이언트로 전송
      userIdArr[socket.id] = res.userId;
      io.emit("notice", { msg: `${userId}님이 입장했습니다.💖` });
      socket.emit("entry-success", {
        msg: `${res.userId}님 입장에 성공했습니다.📬`,
      });
      console.log(
        `새로운 사용자 [${res.userId}]님 입장됨 💖, 입장 리스트`,
        userIdArr
      );
    }

    // 원래는..
    // userIdArr[socket.id] = res.userId;
    // io.emit("notice", { msg: `${res.userId}님이 입장했습니다.` });
  });

  // [실스 3-3] 퇴장시키기
  socket.on("disconnect", () => {
    io.emit("notice", { msg: `${userIdArr[socket.id]}님이 퇴장했습니다.😶‍🌫️` });
    delete userIdArr[socket.id];
    console.log(
      `사용자 퇴장 [${userIdArr[socket.id]}] 😶‍🌫️, 현재 입장 리스트`,
      userIdArr
    );
  });

  socket.on("sendMsg", (res) => {
    io.emit("chat", { userId: res.userId, msg: res.msg });
  });
});

server.listen(PORT, function () {
  console.log(`Server Open : ${PORT}`);
});
