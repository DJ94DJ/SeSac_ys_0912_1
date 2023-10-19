const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express. json());

app.get("/", function(req, res) {
    res.render("index");
});
// 페이지

app.get("/ajax", function(req, res) {
    console.log(req.query);
    // {key: value, key: value } = 이게 쿼리의 형체 >> 객체
    res.send(req.query);
    // res.render("index");
    // 여기선 렌더를 쓰면 안된다. html 코드로 보내면 안돼!
});

app.post("/ajax", function(req, res) {
    console.log(req.body);
    // {key: value, key: value } = 이게 쿼리의 형체 >> 객체
    res.send(req.body);
    // res.render("index");
    // 여기선 렌더를 쓰면 안된다. html 코드로 보내면 안돼!
});

app.get("/axios", function(req, res) {
    console.log(req.query);
    res.send(req.query);
});

app.post("/axios", function(req, res) {
    console.log(req.body);
    const data = {
        ...req.body,
        msg: "반가워요",
    };

    // {
    //     id :
    //     name :
    //     pw :
    //     msgl ~ 이런식으로 전송된다.
    // }

    res.send(data);
    // res.send(req.body);
});


app.get("/fetch", function(req, res) {
    console.log(req.query);
    res.send(req.query);
});

app.post("/fetch", function(req, res) {
    console.log(req.body);
    res.send(req.body);
});

// //실습 2번에 참고
// app.post("/~~~", function(req,res){
//     const id = "";
//     const id = "";
//     //req.body와 id pw 비교하는 코드 작성
//     // 일치 안하면 로그인 실패 메시지 전달.
//     // 일치 하면 로그인 성공 메시지 전달.
// });


app.listen(PORT, function() {
    console.log(`server open: ${PORT}`);
});

// [동적 폼 전송에서의 유효성 검사]
// 개요
// 동적 폼 전송에서 유효성 검사를 하고 싶음.
// 유효성 검사를 input 태그의 pattern, minlength, required 등의 속성을 이용하여 하고 싶음
// 하지만, input 태그의 pattern, minlength, required 이 속성은 form의 "submit" 이 일어날 때 동작함.
// 동적 폼 전송은 form 의 "submit" 을 이용하는 게 아님.
// :오른쪽_화살표: javascript 코드 내에서 폼 유효성 검사를 하는 코드를 작성해야함.
// 방법 1)
// const regex = /^[a-z0-9]{5,}$/
// regex.test(form.id.value)
// 방법 2)
// form.checkVaildity()와 form.reportVaildity() 를 이용해서 input에 작성된 유효성을 검증