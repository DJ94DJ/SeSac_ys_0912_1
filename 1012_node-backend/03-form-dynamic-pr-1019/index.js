const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express. json());

app.get("/", function(req, res) {
    res.render("index");
});




//겟
app.get("/axios", function(req, res) {
    console.log(req.query);
    res.send(req.query);
});

//포스트
app.post("/axios", function(req, res) {
    console.log(req.body);

    const rightid =  "DJ"
    const rightpw =  "icancode"

    const success = (req.body.id2 === rightid && req.body.pw2 === rightpw);
    // 아이디가 완벽 일치 === 
    // && = and (동시 조건 충족 필요)
    // 해당 값이 일치하면 성공 성립


    const data = {
        ...req.body,
        success: success,
        msg: success ? "로그인 성공! 환영합니다." : "로그인 실패! 아이디나 비밀번호를 확인하세요.",
        // 앞 : 성공 성립하면 앞의 메시지, 실패하면 뒤에 메시지 뜸.
    };

    console.log(success);


    res.send(data);
});

app.listen(PORT, function() {
    console.log(`server open: ${PORT}`);
});