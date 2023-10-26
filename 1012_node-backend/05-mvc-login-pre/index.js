// router, constroller, model, view
// 1. router 분리 (요청을 정의) -> 완료
// 2. controller 분리 (요청에 대해 데이터 처리, veiw render, client에 응답)
// 3. model 분리 (db에 접근하여 데이터를 select, insert, update, delete)


//1. index.js 파트
const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//1. 여기까지 controller 파트 Cuser.js


//2. routes 파트 users.js
app.get("/", function 
//2. 여기까지 routes 파트 users.js

//3. controller 파트 Cuser.js
(req, res) {
  res.render("index");
});
//3. 여기까지 controller 파트 Cuser.js

//2. routes 파트 users.js
app.get("/register", function (req, res) {
//2. 여기까지 routes 파트 users.js

//3. controller 파트 Cuser.js
  console.log(req.query);
  res.send(req.query);
//3. 여기까지 controller 파트 Cuser.js
});

//2. routes 파트 users.js
app.post("/login", function (req, res) {
//2. 여기까지 routes 파트 users.js

  // 4. model 파트 User.js
  const id = "lily";
  const pw = "12345";
  //4. 여기까지 model 파트 User.js

//3. controller 파트 Cuser.js
  let data;
  if (req.body.userid == id && req.body.password == pw) {
    data = {
      isSuccess: true,
      msg: "로그인 성공!",
    };
  } else {
    data = {
      isSuccess: false,
      msg: "로그인 실패!",
    };
  }
  res.send(data);
});
//3. 여기까지 controller 파트 Cuser.js

//1. index.js 파트
app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
//1. 여기까지 index.js 파트