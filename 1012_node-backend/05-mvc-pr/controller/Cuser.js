//실습 controller 컨트롤러 js

exports.main = (req, res) => {
    res.render("index");
};

const multer = require('multer');
const path = require('path');
const user = require("../model/app");


// 로그인 변수 확인
exports.login = (req, res) => {


    const userData = user.getUser();

    console.log(req.body); // 로그인 요청 내용 출력

    if (req.body.userid === userData.id && req.body.pw === userData.pw) {
        res.render("result", {
            userid : req.body.userid,
            pw : req.body.pw,
        });
    } else {
        res.status(401).send('Invalid username or password');
    }
};

const uploadFile = multer({
    storage: multer.diskStorage({
        destination: function (req, file, done) {
        done(null, "uploads/");
          },

          filename: function (req, file, done) {
            const ext = path.extname(file.originalname);
            const baseName = path.basename(file.originalname, ext);
            const fileName = req.body.userid + "_" + Date.now() + ext;
            done(null, fileName);
          },
        }),
        limits: { fieldSize: 5 * 1024 * 1024 },
});
exports.upload = uploadFile.single("userfile");