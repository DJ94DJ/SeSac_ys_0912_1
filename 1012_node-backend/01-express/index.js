const express = require('express'); //experss 모듈 import
const app = express(); // server 객체
const PORT = 8000; // 포트 8000 브라우저가 타고가는 포트
// 1 ~ 65536 존재 _1 ~ 1023까지는 기능이 정해져 있어 사용불가
// 3000, 8000 8080 8010 3010 3001 등
// 3306 : mysql에서 사용함 그래서 피하자

//여기에 ejs 넣기 (포트 정한 후)
app.set("view engine","ejs") //(설정이름, 설정값) 

//  app객체의 view 폴더를 설정. 기본값은 : ./views 폴더
// 만약 ./view로 바꾸고 싶다면 아래처럼 작성하면됨
// app.set("views", "./view")

app.use("/static", express.static(__dirname + '/static'));
// __dirname ; ~~/01-experss/static/를 /static 주소로 들어올 수 있다. 앞에 있는것은 가상의 주소, 뒤는 진짜 주소로 할수도 있음

app.use("/redbox", express.static(__dirname + '/static'));
//스택틱으로 들어가는 경로명을 전환시킨다! 이건 페이지가 아니라 경로이름을 수정한거~

app.get('/', function(req, res) {

    //응답 객체 내의 send 메소드를 실행중
    res.send('hello express, 서버가 열려있어요!');
});
// get 메소드 (http 메소드)
// localhost:8000/
// ㄴ 클라이언트가 요청할 수 있는 방법들을 정의함.

// http 메소드의 두번째 인자로 넘겨주는 콜백함소의 매개변수 2개
// 1번째 - reqeust 객체 (요청)
// 2번째 - response 객체 (응답)

// /: localhost:8000 이란 주소로 인터넷을 접속하는데 여기에 슬래쉬 하나만 추가한다는 뜻
// 127.0.0.1:8000 = 내 컴퓨터 주소를 뜻함

// localhost:8000/test
app.get('/test', function(req, res) {
    //응답(response) 객체 내의 send 메소드를 실행중
    res.send('hello express, 서버가 열려있어요! 테스트로 열었군요?');
});

app.get('/test2', function(req, res) {
    //응답(response) 객체 내의 send 메소드를 실행중
    console.log(__dirname); //https://github.com/DJ94DJ/SeSac_ys_0912_1/blob/main/1012_node-backend/01-express
        res.sendfile(__dirname + "/index.html") // 절대경로 지정 되는 코드
        // res.sendFile("./index.html"); //오류코드 상대경로로는 접근이 안된다!
});
// html 파일을 보여준다!!

app.get("/ejs", function(req, res){
    //렌더의 메소드의 기본 dir "./views 폴더 안이 기본 위치"
    res.render("index");
    // sendfile이 단순한 전송이라면 렌더를 최종-총체적인 자료를 보여주는 정보값을 송출 
});

app.get("/ejs2", function(req, res){
    //렌더의 메소드의 기본 dir "./views 폴더 안이 기본 위치"
    res.render("test/index"); //안쪽 폴더에 접근하려면 해당 위치한 폴더를 앞에 적기
});

app.get("/dj", function(req, res) {
    //렌더의 메소드의 기본 dir "./views 폴더 안이 기본 위치"
    res.render("test/dj", {
        name: "뿌뿡",
        product: ["운동화", "후드집업", "스웨터", "엑사세리", "소품"]
    }); 
}); 



    
    



// 서버를 연다.
app.listen(PORT, function () {
    // 앱 내에 있는 listen 메소드를 사용하는 것 (첫번째 인자는 포트, 두번째는 이벤트에 대한 콜백 함수..서버가 열리면 뭐할건지)
    console.log('server open ${PORT}');
});

//'server open @{PORT}'
// 'Listening on port ${PORT}! http://localhost:${PORT}'
// 실행하려면 터미널에 node index.js 입력, 끄려면 컨트롤+c

