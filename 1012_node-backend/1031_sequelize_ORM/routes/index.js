const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");
// const controller = require("../controller/Cvisitor_mysql");



//임시 라우터
router.get("/visitor/test/:id", controller.getTest);




// ~~~~~:8000 -> index.ejs render
router.get("/", controller.home);

// ~~~~~:8000/visitor -> visitor.ejs render
router.get("/visitors", controller.visitor);

// 방명록 등록
router.post("/visitor", controller.postVisitor);

// 방명록 수정
router.patch("/visitor", controller.patchVisitor);

// 방명록 하나 조회 (수정에 쓰임) , 아이디로 확인 =유일한 프라이머리 키니까 그걸 파람스로 가져온다.
router.get("/visitor/:id", controller.getVisitorById);

// 방명록 삭제
router.delete("/visitor/:id", controller.deleteVisitor);


// 추가분

// router.get("/user", userController.home);


// router.get('/signup', userController.signup)
// router.post('/signup', userController.post_signup)

// router.get('/signin', userController.signin)
// router.post('/signin', userController.post_signin)


// router.post('/profile', userController.profile)
// router.patch('/profile/edit/:id', userController.profile_edit)
// router.delete('/profile/delete/:id', userController.profile_delete)



module.exports = router;


