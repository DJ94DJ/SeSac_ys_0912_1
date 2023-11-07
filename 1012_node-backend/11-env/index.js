const express = require("express"); //experss 모듈 import
const path = require("path");
const app = express(); // server 객체
const PORT = 8000; // 포트 8000 브라우저가 타고가는 포트
const dotenv = require("dotenv");
//    cross-env를 사용하면 실행환경에 따라 다른 env를 쓰게 할수 있다.
// 배포버전이냐 개발버전이냐에 따라 다른 env를 사용할 수 있게한다.

//console.log(process.env);
/*
작동시키면 터미널에 나오는 것..

11 packages are looking for funding
  run `npm fund` for details
PS C:\Users\SBA_USER\Desktop\github\SeSac_ys_0912_1\1012_node-backend\11-env> node .\index.js
{
  ALLUSERSPROFILE: 'C:\\ProgramData',
  APPDATA: 'C:\\Users\\SBA_USER\\AppData\\Roaming',
  ~~ 각종 정보

server open 8000
*/

//dotenv.config();
//index.js와 같은 위치에 있는 . env파일을 불러와서 환경변수로 사용할 수 있게끔 함.
dotenv.config({ path: path.join(__dirname, `./config/envs/.env`) });
// 2개 변수를 엮어 하나의 경로 제작

//하나 더 불러오자
dotenv.config({
  path: path.join(
    __dirname,
    `./config/envs/${process.env.NODE_ENV}development.env`
  ),
});
/*
여기서 변수가 만들어짐
  "scripts": {
    "dev": "cross-env NODE_ENV=development node index.js"

    cross-env를 이용해
    NODE_ENV에
    development라는 값넣고
    node index.js 돌려~
  },
*/
console.log("test port:", process.env.PASSWORD);

console.log("test port:", process.env.PORT);
console.log("test var:", process.env.TEST_VAR);

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(PORT, function () {
  console.log(`server open :) : ${process.env.PORT}`);
});

//환경변수 파일(.env)은 깃험에 올리지 말아야함.

// echo : 메시지를 출력해주는 것.. json 파일에서 적용
// "test": "echo \"Error: no test specified\" && exit 1"
//  json 파일 스크립트에 "dev": "node index.js"
//*c참고로 저 dev는 변수처럼 작동함/ 이름 뿡빵삥써도됨.
// 이럼 npm run dev 하면 작동가능
