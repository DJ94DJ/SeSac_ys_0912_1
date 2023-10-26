//router 라우터

const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");
//Cmain=c컨트롤러 m메인
//router.get("/", 컨트롤러 함수) 원래 app 이던걸>>router 


// 요청에 대한 정보를 모아둠
//localhost:8000/
router.get("/", controller.main);

//localhost:8000/comments/
router.get("/comments", controller.comments);

// router.get("/", function(req, res){
//     res.render("ejs");
// }); 
// 요걸 컨트롤러 Cmain에 작성해서 이렇게 보냄.

// **페이지가 많아지면 이렇게 추가하면 됨
// router.get("/aaa", controller.Cmain);

module.exports = router;

