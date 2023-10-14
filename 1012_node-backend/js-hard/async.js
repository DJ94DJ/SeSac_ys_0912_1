//non-blocking io 비동기 처리를 배우기
// js 비동기 처리 =>원하는 순서대로 함수를 처리한다듯 것.


//문제가 발생한 코드
// const {resolve} = require("path");

// function goMart() {
//     console.log("마트에 가서 어떤 음료를 살지 고민하기.");
// }

// let product;
// let price;

// function pickDrink(callback) { //아님 cb라고 적는다. 여기서 이 함수는 정의만 하는 것 (실행 안함 실행시키는 코드는 안의 setTimeout에 있음) 
//     setTimeout(function(){
//         console.log("무얼 마실지 결정했다");
//         product = "제로 콜라";
//         price = 2000;
//         callback(product, price); 
//         //pay(product, price);
//     }, 3000);
//     // 3초 뒤에 고민이 끝남
// };

// function pay(product, price) {
//     console. log(`상품명: ${product}, 가격: ${price}`);
//     // 전역변수
// };

// goMart();
// pickDrink(pay); //pay라는 함수에 인자로 넘긴다는 뜻! 그러니 이름만 넘긴다 ()까지 적으면 거기 안에서 실행시킨다는 다른 뜻이 된다.
// pay(product, price);


//콜백(callback) 함수 : 보통 함수를 선언한 뒤에 함수 타입 파라미터를 맨 마지막에 하나 더 선언해 주는 방식으로 정의
//문제점!:콜백지옥.. 그래서 Promise라는 클래스를 사용한다.
// • ES6 에서 추가된 JS 문법
// • new Promise 로 만들어서 사용!
// • new Promise가 만들어질 때, executor(실행 함수)가 자동으로 실행
// • executor의 인수인 reject 와 resolve
// • Promise가 생성되면 작업을 실행하고, 작업의 완료 여부를 executor의 매개변
// 수를 통해서 전달
// • executor 매개변수 (resolve와 reject 모두 callback)
// • resolve : 비동기 작업이 성공했을 때
// • reject : 비동기 작업이 실패했을 때

//promise 기본 예시
function promise1 (flag) { // 불린값을 flag로 받는다.
    return new Promise(function(resolve, reject){
        if(flag) {
            resolve(`상태 fulfilled ! then으로 연결`); 
        } else {
            reject(`상태 rejected ! catch으로 연결`)
        }
    });
}
promise1(true)

//promise로 해결한다면.
console.log("****promise를 이용해 수정한 코드를 실행합니다.");

// const {resolve} = require("path");

function goMart() {
    console.log("마트에 가서 어떤 음료를 살지 고민하기.");
}

let product;
let price;

function pickDrink(callback) { //아님 cb라고 적는다. 여기서 이 함수는 정의만 하는 것 (실행 안함 실행시키는 코드는 안의 setTimeout에 있음) 
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("무얼 마실지 결정했다");
            product = "제로 콜라";
            price = 2000; //이때까지 결정되면 성공이니, 이 뒤에 리졸브를 넣는다.
            resolve(true); //이때 원하는 작업이 끝났다.실패를 알릴필요가 없다면 리젝트 안써도 됨.
        }, 3000);
        setTimeout(function(){console.log("3");}, 1000);
        setTimeout(function(){console.log("2");}, 1500);
        setTimeout(function(){console.log("1");}, 2000);
    })

    // 3초 뒤에 고민이 끝남
};

function pay(product, price) {
    console. log(`상품명: ${product}, 가격: ${price}`);
    // 여기에 프로미스를 사용한다.
};

goMart();
pickDrink().then(() => {
    pay(product, price);
}); //pay라는 함수에 인자로 넘긴다는 뜻! 그러니 이름만 넘긴다 ()까지 적으면 거기 안에서 실행시킨다는 다른 뜻이 된다.
// pay(product, price);


