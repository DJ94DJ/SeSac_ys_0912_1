const express = require("express");
const app = express();
// 앱 개체로 서버 개체 만들기
const PORT = 8000;
app.set("view engine", "ejs");



//req.body를 해석하기 위한 코드 - body-parser 적기
app.use(express.urlencoded({ extended: true })) 
// urlencoded(): x-www-form-urlencoded 형태의 데이터를 해석
// extended : true일 경우 qs 모듈(외부 모듈)을 이용한다. false일 경우 내장 모듈인 queryString 모듈을 사용한다.
//~~~name=lily
//https://duklook.tistory.com/256 [node.js] express.urlencoded 에 대한 이해를 위한 문헌

app.use(express. json()) 
// application/json 형태의 데이터를 해석


// localhost:8000 get url 접속에 대한 응답 위한 코드
app.get("/", function(req, res) {
    res.render("index");
})

// get이라는 주소의 API작성
app.get("/get", function(req, res) {
    console.log(req.query);
    console.log(req.query.id);  // 아이디만
    // req.query : get 요청에 대해서 client가 보낸 데이터를 담고 있다.
    // url에서 기본 주소(localhost:8000/get) 뒤에 오는 ?id=lily&pw=1234 이런 주소를 의미.
    // 기본 주소 ?id=lily&pw=1234 =이게 쿼리 여기에 정보가 담겨서 온다!!

    // get 요청으로 데이터를 보낼 때 url에 직접 query를 만들어서 전송이 가능하다.
    // get 요청은 url로 접속이 가능하다. = 따라서 거기에 전송되는 데이터가 노출된다; 
    //즉 개인정보에 사용하는 전송은 get으로 하면 안되겠지?
    // req.query에 데이터가 담겨서 온다 
    // get 요청은 데이터 전송 시에 form 태그를 이용할 경우, method를 get으로 해놓으면 get 요청
    // 정보를 조회하는 요청에 사용함. (CRUD 중에서 Read를 의미하는 요청에 사용)
    res.send("get 요청이 성공적으로 완료되었습니다");
})

// localhost:8000/post로 post요청을 받기 위한 준비.
// post 요청에 대한 데이터는 req.body에 담겨져서 온다!
// post 요청은 url로 직접 요청하는 것은 불가능
// 정보가 숨겨짐. (url에 노출되지 않음.) 보통 데이터를 새로 생성하는 요청에 활용됨.
// (CRUD 중에서 Read를 의미하는 요청제외하고 다 사용
app.post("/post", function (req, res) {
    console.log(req.body);
    res.send("post 요청이 성공적으로 완료되었습니다");
});

app.post("/post/ver2", function (req, res) {
    console.log(req.body);
    res.render("result", {
        name: req.body.name,
        email: req.body.email,
    });
});

// send는 메시지만 응답 가능
// render는 페이지로 표시 가능




// 요청의 목적 - 종류 
// CRUD (create, read, update, delete) = 조회, 데이터 저장(db에 데이터 삽입), 원래 있던 데이터 변경 위해, 데이터 삭제

// 실습 회원가입 백엔드!
app.get("/get_sign", function(req, res) {
    console.log(req.query);;
    res.send("회원가입 요청이 성공적으로 완료되었습니다");
})


app.listen(PORT, function() {
    console.log(`server open: ${PORT}`);
});

//처음 시작할때
// PS C:\Users\SBA_USER\desktop\github\SeSac_ys_0912_1\1012_node-backend\js-hard> cd ..
// PS C:\Users\SBA_USER\desktop\github\SeSac_ys_0912_1\1012_node-backend> cd .\01-express\
// PS C:\Users\SBA_USER\desktop\github\SeSac_ys_0912_1\1012_node-backend\01-express> cd ..
// PS C:\Users\SBA_USER\desktop\github\SeSac_ys_0912_1\1012_node-backend> cd .\1017_02-form\           
// PS C:\Users\SBA_USER\desktop\github\SeSac_ys_0912_1\1012_node-backend\1017_02-form> npm i express ejs



// 깃배쉬로 바꿔서 노드몬 실행하면 서버 수정할때마다 껏다끼지 않아도 됨
// SBA_USER@SBA MINGW64 ~/desktop/github/SeSac_ys_0912_1 (main)
// $ nodemon -v
// 3.0.1

// SBA_USER@SBA MINGW64 ~/desktop/github/SeSac_ys_0912_1 (main)
// $ cd ./1012_node-backend/

// SBA_USER@SBA MINGW64 ~/desktop/github/SeSac_ys_0912_1/1012_node-backend (main)
// $ cd ./1017_02-form/

// SBA_USER@SBA MINGW64 ~/desktop/github/SeSac_ys_0912_1/1012_node-backend/1017_02-form (main)
// $ nodemon index.js
// [nodemon] 3.0.1
// [nodemon] to restart at any time, enter `rs`
// [nodemon] watching path(s): *.*
// [nodemon] watching extensions: js,mjs,cjs,json
// [nodemon] starting `node index.js`
// server open: 8000



