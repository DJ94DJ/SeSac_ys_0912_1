
// 케이스3---------------
// 파일에서 여러 식별자 중 일부만 객체 형태로 내보내는 경우
// 특정 식별자 모듈을 받아올 때 / 객체 부조분의 할달
const { add } = require("./math.js");
const { PI } = require("./math.js");
const sum = add(2, 3); 
console.log(sum, PI);
// 키 값 그대로 변형없이 받아와야 한다.


// 케이스2---------------
// 파일에서 여러 식별자를 객체 형태로 내보내는 경우
// 모듈을 받아올 때 객체 그대로 math라는 식별자로 수령

// const math = require("./math.js");
// //리콰이어 모듈을 불러오는 함수
// const sum = math.add(2, 3); 
// //여러개일 경우 이렇게 타고 들어가야한다.
// console.log(sum);
// console.log(math.PI);
// //터미넌 컨트롤 물결키

// 케이스1---------------
// 파일에서 한개의 식별자만 내보내는 경우
// const add = require("./math.js")
// cost sum = add(2,3);
// console.log(sum);

