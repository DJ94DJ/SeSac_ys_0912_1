const express = require('express')
const user = require('../controller/Cuser')
const router = express.Router()


// index 페이지 렌더 
router.get('/', user.index);



// 회원가입을 시켜주는 기능 (insert)문을 날려주는(실행 시켜주는) api 
router.get('/signup', user.signup); // 회원가입 페이지 렌더
router.post('/signup', user.post_signup); // (회원가입 버튼 눌렀을떄 작동)


// 로그인 -> user table에서 회원 존재 여부를 판단하는 api 
router.get('/signin', user.signin); // 로그인 페이지 렌더 (조회지만 보통 post로 한다)
router.post('/signin', user.post_signin); //(로그인 버튼을 눌렀을 때 동작함) 


//프로필 페이지를 렌더 (임시. 일반 POST 전송. 왜냐? 로그인을 유지 시킬 수 있는 기술을 모르기 때문에)
router.post('/profile', user.profile);


router.patch('/profile/edit/:id', user.profile_edit); // 회원 수정

router.delete('/profile/delete/:id', user.profile_delete); // 회원 탈퇴


// 회원정보 페이지 렌더
module.exports = router;

//이상없음