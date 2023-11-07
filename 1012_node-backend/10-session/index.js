const { createSecretKey } = require("crypto");
const express = require("express");
const app = express();
const PORT = 8000;

const session = require("express-session");
app.set("view engine", "ejs");
app.use(
  session({
    secret: "secret key",
    resave: false, //모든 요청마다 session을 다시 저장할 건자
    saveUnitialized: true, //클라이언트 처음접속시 세션 초기화 여부
    cookie: {
      httpOnly: true, //document.cookie로는 접속 안됨
      maxAge: 10 * 1000,
    },
    // secure: true //https에서만 동작하게함
  })
);

// 인덱스 (user가 로그인한 경우 nav에 login or logout 이 떠있어야함)
app.get("/", (req, res) => {
  res.render("index", { user: req.session.user });

  if (req.session.user === undefined) {
    console.log("현재 비 로그인 상태입니다.");
  } else console.log({ user: req.session.user });
});

//회원정보 세션 생성하는 라우터
// 로그인 버튼 클릭시 Axios로 전달
app.get("/set", (req, res) => {
  console.log("1:", req.session);

  app.get("/get"0, (req, res) => {
    console.log(1);
  }); // 로그인 성공한 시점에 req.session.user 에 고유한 값

  req.session.user = "lily";
  //console.log("2:", req.session); //클라이언트 별로 세션을 가지고 있기에 req를 쓴다.
  res.send("set session ");
  console.log(req.session.user, "회원 로그인 완료");
});

app.get("/set2", (req, res) => {
  console.log("2:", req.session);

  app.get("/get2", (req, res) => {
    console.log(2);
  }); // 로그인 성공한 시점에 req.session.user 에 고유한 값
  req.session.user = "DJ";
  res.send("set session ");
  console.log(req.session.user, "회원 로그인 완료");
});

// 회원 로그아웃 라우터
// app.get("/logout", (req, res) => {
//   console.log(req.session.user, "회원 로그아웃 진행");

//   req.session.destroy(); // 세션 삭제

//   res.send("logout");
// });

app.get("/logout", (req, res) => {
  console.log(req.session.user, "회원 로그아웃 진행");
  req.session.destroy((err) => {
    if (err) throw err;

    res.send({ result: true, msg: "로그아웃 성공" });
  });
});

// 회원정보 알림 라우터
// app.get("/get", (req, res) => {
//   console.log("user :", req.session.user);
//   res.send({ user: req.session.user });
// });

app.listen(PORT, function () {
  console.log("Sever Open:", PORT);
});
