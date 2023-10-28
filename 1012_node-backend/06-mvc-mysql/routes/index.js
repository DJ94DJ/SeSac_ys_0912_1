
const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

// ~:8000 -> index.ejs render
router.get("/", controller.home);

// ~:8000/visitors -> visitor.ejs render
router.get("/visitors", controller.visitor);


// ~:8000/visitor
//같은 url이라도 요청은 다 다르다 - 방명록 등록
router.post("/visitor",  controller.postVisitor);


// 수정
router.patch("/visitor/:id", function(req, res){
    res.send("");
});

// 삭제
router.delete("/visitor/:id", controller.deleteVisitor);

module.exports = router;
// 익스포츠!!! s빼먹지 말자..





