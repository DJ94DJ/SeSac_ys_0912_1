//여기서 검사한다

// const User = require("../model/User");
// 헷갈릴땐 이거로 하면 돌아가긴함.

const User = require("../model/index");


exports.home = (req, res) => {
  res.render("user");
};

//회원가입시 html렌더
exports.signup = (req, res) => {
    res.render('signup')
  }

// 회원가입 user insert
exports.post_signup = (req, res) => {
    User.post_signup(req.body, function () {
      res.send({ result: true })
    })
  }

  //로그인시 html렌더
exports.signin = (req, res) => {
    res.render('signin')
  }

exports.post_signin = (req, res) => {
    User.post_signin(req.body, function (rows) {
      console.log(rows[0])
      if (rows.length > 0) res.send({ result: true, id: rows[0].id })
      else res.send({ result: false })
    })
  }

exports.profile = (req, res) => {
    User.get_user(req.body.id, function (result) {
      console.log('profile', result)
      if (result.length > 0) res.render('profile', { data: result[0] })
      else res.redirect('/user/signin')
    })
  }

  
exports.profile_edit = (req, res) => {
    const data = {
      ...req.body,
      id: req.params.id,
    }
    User.update_profile(data, function () {
      res.send({ result: true })
    })
  }
  
  exports.profile_delete = (req, res) => {
    User.delete_user(req.params.id, function () {
      res.send({ result: true })
    })
  }