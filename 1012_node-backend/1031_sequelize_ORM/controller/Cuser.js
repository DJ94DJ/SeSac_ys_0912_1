//시퀄라이저로 정리하는것 user

const { User }= require("../model") // 모델 /index.js 부르겠단뜻


exports.home = (req, res) => {
  res.render("user");
};

//회원가입시 html렌더
exports.signup = (req, res) => {
    User.findAll();
    .then((result) => {
        res.render("signup", {data : result})
    });
  };

// 회원가입 user insert
exports.post_signup = (req, res) => {
    const data = {
        userid: req.body.userid,
        pw :req.body.pw,
        name :req.body.name
    }

    const createUser = await User.create(data)
    .catch((err)=> {console.log(err); res.status(400).send("오류발생");});
    res.send(createVisitor);

    User.create(data).then((result)=>{res.send(result); })
    .catch((err)=>{console.log(err);
        res.send({ result: true });
    })
  };

//로그인시 html렌더
exports.signup = (req, res) => {
    res.render('signin')
};

//로그인 기능
exports.post_signin {
    User.findOne({
        where : {
            userid : req.body.userid,
            pw : req.body.pw,
        }
    }).then((result)=> {
        console.log(result)
        if(result) res.send({ result: true, id: result.id});
        else  res.send({ result: false });
    });

};

//프로필 확인
exports.getProfile = (req, res) => {
    User.findOne()
    .then((result)=>{
        res.render("profile", {data : result});
    });

};


// 포스트 프로필 user 조회
exports.postProfile = (req,res) => {
    User.findOne({
        where : {
            id : req.body.id
        }
    }).then((result)=> {
        res.render("findOne result profile", {data : result});
        res.send(result);
    });
 };

 // router.patch("/profile/edit/:id", controller.patchEdit); user 정보 수정
exports.profile_edit= (req,res) => {
    const data = {
        userid: req.params.userid,
        name :req.params.name,
        pw :req.params.pw
    };
    User.update(data,{
        where : {
            id : req.params.id
        }
    }).then((result)=>{
        console.log("update result:", result)
        res.send({result : true})
    });
};

// user 삭제
exports.profile_delete = (req, res) => {
    User.delete_user(req.params.id, function () {
      res.send({ result: true })
    }).then((result) => {
        console.log("destroy result", result);
       res.send({result: result}); 
       
    });
};


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