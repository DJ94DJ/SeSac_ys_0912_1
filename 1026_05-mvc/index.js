//메인js
// 순서 중요!
const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const router = require("./routes");
app.use("/", router);
// localhost:8000/commen/t~~~~ 뭐가 오든 다 이제 router로 들어간다.

const userRouter = require("./routes/user");
app.use("/user", userRouter);

/*[before] 이건 이제 routes에서 잡을거임.
// app.get("/", function(req, res) {
//     res.render("index");
// });
// ** 폴더 경로만 잡아도 알아서 index.js를 잡는다!
const router = require("./routes/index"); */



app.get("*", function(req, res){
    res.send("페이지를 찾을 수 없습니다. 404");
});
// 404 : 존재하지 않는 클라이언트의 Get 요청 대응 
// 아무도 요청을 받아주지 않았을때
// * : 어떤 라우터도 상관이 없다.

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});



