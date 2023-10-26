const User = require("../model/User");
// User = { getUesr: () => {} }

exports.main = (req, res) => {
  res.render("index");
};


exports.login = (req, res) => {

  const userlist = User.userlistcase();
  const user = userlist.find(user => user.id === req.body.userid && user.pw === req.body.password);

  //이렇게 해야 객체 안에 속성에 접근할수 있다.

  console.log(user);

  let data;
  if (user) {
    data = {
      isSuccess: true,
      msg: `${user.userName}님, 로그인 성공!`,
      userName: user.userName,
    };
  } else {
    data = {
      isSuccess: false,
      msg: "로그인 실패!",
    };
  }
  res.send(data);
};



//실습
exports.register = (req, res) => {
  console.log(req.query);
  res.send(req.query);
};

