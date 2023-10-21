const { name } = require("ejs");
const express = require("express");
const multer = require("multer"); // 미들웨어 멀터 불러오는 코드!

// path : 특정 파일 폴더 경로를 받았을 때 조작, 관리를 돕는다.
const path = require("path"); // 불러오기

// 확장자 추출, 파일명 추출
console.log("확장자", path.extname("hi.txt"));
// console.log("이름", path.basename("hi.txt", path.extname("hi.txt"));


const app = express();
const PORT = 8000;

// app.use("/uploads", express.static(__dirname + "실제하는 경로"))
app.use("/uploads", express.static(__dirname + "/uploads"));



const upload = multer({
    //데스티네이션~
    // upload라는 객체 안에는 미들웨어 함수가 존재. single(), array()
    // 미들웨어 : 요청과 응답 사이에 존재.
    // 멀터가 임의의 문자열 생성해 그 문자열을 파일 이름으로 만듦.. 근데 확장자 안붙여줌;
    dest: "uploads/",
    });

    const uploadDetail = multer({
        storage: multer.diskStorage({
          destination: function (req, file, done) {
            done(null, "uploads/");
          },
          filename: function (req, file, done) {
            console.log(file); // file.originalname ex) 이미지.webp
            const ext = path.extname(file.originalname); // 확장자 (예: .webp)
            const baseName = path.basename(file.originalname, ext); // 파일 이름에서 확장자 제외 (예: 이미지)
            const fileName = baseName + "_" + inputText +"_" + Date.now() + ext; // 새로운 파일 이름 생성 (예: 이미지_1634829435000.webp)
      
            done(null, fileName);
          },
        }),
        limits: { fieldSize: 5 * 1024 * 1024 }, //5mb 제한
      });



//     const uploadDetail = multer({
//         storage: multer.diskStorage({
//         destination: function(req, file, done) {
//             done(null, "uploads/");
//         },

//         filename: function(req, file, done) {
//             //확장자와 기본 이름을 만드는 기능 구축
//             console.log(file); // file.originalname ex)이미지.webp
//             const ext = path.extname(file.originalname); // (확장자)
//             const baseName = path.basename(file.originalname, ext); // (파일이름)
//             // 미니언_13323.webp
//             const fileName = baseName = "_" + Date.now() + ext;

//             done(null, fileName);
//         },
//     }),
//     limits: {fieldSize: 5 * 1024 * 1024}, //5mb 제한
// });

//uploadss/이미지명_123453156.webp

// storage : 파일을 저장할 정보
// -- - diskStorage : 파일을 디스크에 저장하기 위한 메소드
// ---- - destination : 파일이 저장될 경로
// ---- - filename : 파일이 저장될 이름

// limits
// --  - filesize


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express. json());

app.get("/", function(req, res) {
    res.render("index");
});



app.post("/upload", upload.single("userfile"), function (req, res) {

//app.post("/upload", (응답) 
//upload.single(""), (((이사이에 미들웨어를 넣어주면 된다. 괄호사이엔 인풋 네임 ㄱ)))
//function (req, res) {   (요청)

console.log( "file:" , req.file); 
console.log( "body:" , req.body);

    // res. render("result", {
    //     src : req.file.path,
    //     title : req.body.title
    // });

    res.send("파일 업로드");
});




//single() : 미들웨어. => 클라이언트가 보낸 요청 중 userflie이라는 
//name에 일치하는 파일 데이터가 있다면 이를 저장하여,  
//req.file이라는 객체를 생성한다!
// single() :  파일 한개만 업로드할때 씀.
app.post("/upload/detail", 
uploadDetail.single("userfile"), 
function(req, res){
    console.log("file detail:", req.file);
    console.log("file detail:", req.body);


    //다음 페이지로 넘어가기 렌더*
    res.render("result", {
        src : req.file.path,
        title : req.body.title
    });

    // res.send("파일 업로드");
});


// 여러 파일 인풋하나로 받기
// req.files 생성
app.post("/upload/array", uploadDetail.array("userfile"), function(req, res){
    console.log("file 여러개(ver1)", req.files);
    res.send(" 어레이 여러 파일 업로드 완료");
});


// 여러 파일 인풋 여러개로 받기 (name이 2개 이상)
// req.files 생성
app.post("/upload/fields", uploadDetail.fields([{name:"userfile1"},{name: "userfile2"}]), function(req, res){
    console.log("file 여러개(ver2)", req.files);
    res.send(" 필드 여러 파일 업로드 완료");
});



app.listen(PORT, function() {
    console.log(`server open: ${PORT}`);
});

// // PS C:\Users\SBA_USER\Desktop\github\SeSac_ys_0912_1\1012_node-backend> cd .\04-file-upload\
// PS C:\Users\SBA_USER\Desktop\github\SeSac_ys_0912_1\1012_node-backend\04-file-upload> npm init
// This utility will walk you through creating a package.json file.
// It only covers the most common items, and tries to guess sensible defaults.

// See `npm help init` for definitive documentation on these fields
// and exactly what they do.

// Use `npm install <pkg>` afterwards to install a package and
// save it as a dependency in the package.json file.

// Press ^C at any time to quit.
// package name: (04-file-upload) npm i express ejs
// Sorry, name can only contain URL-friendly characters.
// package name: (04-file-upload) .
// Sorry, name cannot start with a period.
// package name: (04-file-upload) study
// version: (1.0.0)
// description:
// entry point: (index.js)
// test command:
// git repository:
// keywords:
// author:
// license: (ISC)
// About to write to C:\Users\SBA_USER\Desktop\github\SeSac_ys_0912_1\1012_node-backend\04-file-upload\package.json:

// {
//   "name": "study",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "author": "",
//   "license": "ISC"
// }


// Is this OK? (yes)
// PS C:\Users\SBA_USER\Desktop\github\SeSac_ys_0912_1\1012_node-backend\04-file-upload> 

// npm init -y 
// npm i express ejs

