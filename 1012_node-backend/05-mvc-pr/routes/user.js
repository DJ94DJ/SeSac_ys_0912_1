// 실습 routes 메인 js
// 요청을 정의하는 것
//user.js로 이름 수정해두기

const express = require('express');
const router = express.Router();
const controller = require("../controller/Cuser");

router.get("/", controller.main);

router.post("/upload", controller.login);
router.post("/upload/post", controller.login);

module.exports = router;