//시퀄라이저로 정리하는것 user

const { User }= require("../model") // 모델 /index.js 부르겠단뜻


exports.home = (req, res) => {
  res.render("user");
};



//회원가입시 html렌더

exports.signup = (req, res) => {
    res.render('signup')
  }
// exports.signup = (req, res) => {
//     User.findAll();
//     .then((result) => {
//         res.render("signup", {data : result})
//     });
//   };

  // 회원가입 user insert
exports.post_signup = (req, res) => {
    User.create(req.body).then((result) => {
      console.log('User create:', result)
      res.send({ result: true })
    })
    .catch((err) => {
      console.log("User create err: ", err);
      res.send({ result: false });
    });

  }


// exports.post_signup = (req, res) => {
//     const data = {
//         userid: req.body.userid,
//         pw :req.body.pw,
//         name :req.body.name
//     }

//     const createUser = await User.create(data)
//     .catch((err)=> {console.log(err); res.status(400).send("오류발생");});
//     res.send(createVisitor);

//     User.create(data).then((result)=>{res.send(result); })
//     .catch((err)=>{console.log(err);
//         res.send({ result: true });
//     })
//   };


//로그인시 html렌더
exports.signin = (req, res) => {
    res.render('signin')
}

//로그인 기능
exports.post_signin = (req, res) => {
    User.findOne({
      where: { userid: req.body.userid, pw: req.body.pw },
    }).then((result) => {
      console.log('User findOne:', result)
      if (result) res.send({ result: true, id: result.id })
      else res.send({ result: false })
    })
}
// exports.post_signin {
//     User.findOne({
//         where : {
//             userid : req.body.userid,
//             pw : req.body.pw,
//         }
//     }).then((result)=> {
//         console.log(result)
//         if(result) res.send({ result: true, id: result.id});
//         else  res.send({ result: false });
//     });

// };

//프로필 확인
exports.getProfile = (req, res) => {
    User.findOne({
      where: { id: req.body.id },
    }).then((result) => {
      console.log('User findOne:', result)
  
      // 만약 조회되지 않는다면 result에 null이 담김.
      // 따라서 if문으로 result에 값이 있을 경우에 profile을 렌더하도록 함.
      if (result) res.render('profile', { data: result })
      else res.redirect('/user/signin')
    })
}
// exports.getProfile = (req, res) => {
//     User.findOne()
//     .then((result)=>{
//         res.render("profile", {data : result});
//     });
// };


// 포스트 프로필 user 조회
exports.profile = (req, res) => {
    User.findOne({
      where: { id: req.body.id },
    }).then((result) => {
      console.log('User findOne:', result)
  
      // 만약 조회되지 않는다면 result에 null이 담김.
      // 따라서 if문으로 result에 값이 있을 경우에 profile을 렌더하도록 함.
      if (result) res.render('profile', { data: result })
      else res.redirect('/user/signin')
    })
    // User.get_user(req.body.id, function (result) {
    //   console.log('profile', result)
    //   if (result.length > 0) res.render('profile', { data: result[0] })
    //   else res.redirect('/user/signin')
    // })
}



 // router.patch("/profile/edit/:id", controller.patchEdit); user 정보 수정
exports.profile_edit = (req, res) => {

    User.update(req.body, {
      where: { userid: req.params.id },
    }).then((result) => {
      console.log('User update:', result) // [ 1 ] or [ 0 ]
  
      // 업데이트 여부에 따라 result에 [ 1 ] 혹은 [ 0 ] 이 담김
      // 따라서 if문을 이용하여 result의 0번 인덱스가 1일 경우에 성공, 그렇지 않으면 실패로 응답
      if (result[0]) res.send({ result: true })
      else res.send({ result: false })
    })
    // const data = {
    //   ...req.body,
    //   id: req.params.id,
    // }
    // User.update_profile(data, function () {
    //   res.send({ result: true })
    // })
}

// exports.postProfile = (req,res) => {
//     User.findOne({
//         where : {
//             id : req.body.id
//         }
//     }).then((result)=> {
//         res.render("findOne result profile", {data : result});
//         res.send(result);
//     });
//  };

// exports.profile_edit= (req,res) => {
//     const data = {
//         userid: req.params.userid,
//         name :req.params.name,
//         pw :req.params.pw
//     };
//     User.update(data,{
//         where : {
//             id : req.params.id
//         }
//     }).then((result)=>{
//         console.log("update result:", result)
//         res.send({result : true})
//     });
// };

// user 삭제
exports.profile_delete = (req, res) => {
    User.destroy({
      where: { id: req.params.id },
// 프라이머리 키 기준

    }).then((result) => {
      console.log('User destroy:', result) // 1(삭제 성공) or 0(삭제 실패)
  
      // 삭제 여부에 따라 result에 1 혹은 0 이 담김
      // 따라서 if문을 이용하여 result가 1일 경우에 성공, 그렇지 않으면 실패로 응답
      if (result) res.send({ result: true })
      else res.send({ result: false })
    })
    // User.delete_user(req.params.id, function () {
    //   res.send({ result: true })
    // })
}
// exports.profile_delete = (req, res) => {
//     User.delete_user(req.params.id, function () {
//       res.send({ result: true })
//     }).then((result) => {
//         console.log("destroy result", result);
//        res.send({result: result}); 
       
//     });
// };


// 검사
exports.getTest = (req, res) => {

    User.findAll({
        attributes: ["userid", "id", "pw"], //내용선정, 

        order: [["id", "ASC"]],
        //select * from visitor where id = 9 limit 1 order by username ASC

    }).then((result) => {
        console.log("findOne result", result);
        res.send(result);
    });

};