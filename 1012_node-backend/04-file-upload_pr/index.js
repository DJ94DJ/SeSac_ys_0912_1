const { name } = require("ejs");
const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 8000;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express. json());

//이게 페이지에 뜨는 이미지 주소를 불러오기 위한 작업임.
app.use("/uploads", express.static(__dirname + "/uploads"));



const uploadFile = multer({
    storage: multer.diskStorage({
        destination: function (req, file, done) {
        done(null, "uploads/");
        // 폴더 위치
          },

          filename: function (req, file, done) {

            console.log(file); // file.originalname ex) 이미지.webp

            const ext = path.extname(file.originalname); // 확장자 (예: .webp)
            const baseName = path.basename(file.originalname, ext); // 파일 이름에서 확장자 제외 (예: 이미지)
          
            const fileName = req.body.userid + "_" + Date.now() + ext; // 새로운 파일 이름 생성 (예: 이미지_1634829435000.webp)
            done(null, fileName);
          },
        }),
        limits: { fieldSize: 5 * 1024 * 1024 }, //5mb 제한
      });
      

//
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express. json());

// index 페이지
app.get("/", function(req, res) {
    res.render("index");
});


//

app.post("/upload", uploadFile.single("userfile"), function(req, res){
    console.log("file detail:", req.file);
    console.log("file detail (body):", req.body);
    
    //다음 페이지로 넘어가기 렌더*
    res.render("result", {
        src : req.file.path,
        userid : req.body.userid,
        pw : req.body.pw,
        name : req.body.name,
        age : req.body.age
    });
});



app.post("/upload/post", uploadFile.single("userfile"), 
function(req, res){
  res.send({
    src: req.file.path,
    userid: req.body.userid,
    pw: req.body.pw,
    name: req.body.name,
    age: req.body.age 
  });
  }
);



app.post("/upload/dynamic", uploadFile.single("userfile"), 
function(req, res){
  res.send({src: req.file.path });
  }
);


// end
app.listen(PORT, function() {
    console.log(`server open: ${PORT}`);
});
