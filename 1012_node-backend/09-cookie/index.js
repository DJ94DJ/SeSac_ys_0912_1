const express = require("express");
const app = express();
const PORT = 8000;
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(cookieParser()); // 쿠키를 해석할 수 있게 해줌.
// 쿠키 파서 미들웨어 걸기 = 쿠키를 해석하고 사용할 수 있게함.



const cookieConfig = {
    // httpOnly: true, // document.cookie로의 접근을 막는다.(작동시 콘솔안보임) 서버에서만 접근가능하게됨.
   // 미들웨어에서이름 바꾸면 안됨.
    maxAge: 10000, // (ms(1000=1초) 단위로 보존기간 설정) 24시간 설정시 1000*60*60*24로 설정
    // expires: "2023-11=04T18:00"
    //path : "/" // 만약 "/test" -> localhost:8000 *(해당 주소엔 쿠키 존재 안함 대신 /test에 포진됨 )
    // secure: true, // https 보안 서버에서만 쿠키동작
    // signed: true // 쿠키 암호화  -> req.signedCookies
};

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/set", (req, res) => {
//서버가 쿠키를 만들어서 응답을 보냄
    // key: "key1  value: value1
    // res.cookie("key1", "value1", cookieConfig);
    // res.cookie("popup", "1", cookieConfig);
    res.cookie("popupClosed", "true", cookieConfig);
    res.send("set cookie");
});

app.get("/get", (req, res) => {
    console.log("cookie :",req.cookies);
    res.send(req.cookies);
});


app.listen(PORT, function () {
  console.log("Sever Open:", PORT);
});
