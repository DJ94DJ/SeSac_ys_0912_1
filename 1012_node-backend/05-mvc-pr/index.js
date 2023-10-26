//실습 메인 js

const express = require('express');
const app = express();
const PORT = 8000;


app.set("view engine", "ejs");
app.use(express. json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/user');



app.use("/user", routes);


//이게 페이지에 뜨는 이미지 주소를 불러오기 위한 작업임.
app.use("/uploads", express.static(__dirname + "/uploads"));


// end
app.listen(PORT, function() {
    console.log(`server open: ${PORT}`);
});


// 1. 라우터 > 요청 정의
// 2. 컨트롤러 > 요청에 대한 데이터 처리
// 3. 모델 > db에 접근에 데이터를 S,I,D,Ug하는 기능