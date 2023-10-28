const express = require('express');
const app = express();
const PORT = 8000;


app.set("view engine", "ejs");
app.use(express. json());
app.use(express.urlencoded({ extended: true }));

const router = require("./routes");
app.use("/", router);
//라우터를 미들웨어로 설정

app.get("*", function(req, res){
    // req, res 순서 헷갈리지 말자~
    res.render("404");
});

app.listen(PORT, function() {
    console.log(`server open: ${PORT}`);
});
