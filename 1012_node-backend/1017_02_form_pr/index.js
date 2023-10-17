const express = require("express");
const app = express();
const PORT = 8000;
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true })) 
app.use(express. json()) 

app.get("/", function(req, res) {
    res.render("index");
})

app.get("/get", function(req, res) {
    console.log(req.query);
    res.send("get 요청이 성공적으로 완료되었습니다");
})

app.get("/get/ver2", function (req, res) {
    console.log(req.query);
    res.render("result_get", {
        name: req.query.id,
        email: req.query.gender,
    });
});

app.post("/post", function(req, res) {
    console.log(req.query);
    res.send("post 요청이 성공적으로 완료되었습니다");
})

app.post("/post/ver2", function (req, res) {
    console.log(req.body);
    res.render("result_post", {
        name: req.body.id,
        email: req.body.gender,
    });
});

app.listen(PORT, function() {
    console.log(`server open 완료: ${PORT}`);
});