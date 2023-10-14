// const { reject } = require("async");
// const { resolve } = require("path");

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

// 특정 함수가 return하는 값이 promise 객체일 경우, 
// chaining으로 then, catch 라는 메소드
promise1(true).then((result)=>{ //then 안에는 콜백함수(result)가 들어간다.
    console.log(result); //result에는 resolve에 보낸 인자값이 들어오게 됨 - 그걸 출력한다.
}).catch((err)=>{console.log(err);})
//catch는 then뒤에 온다. 만약 없으면 그냥 붙임됨.


promise1(false).then((result)=>{ 
    console.log(result); 
}).catch((err)=>{console.log(err);})

//콜백 지옥 예시
// console.log("콜백 지옥 예제.");

// function add(n1, n2, cb) {
//     setTimeout(function () {
//         let result = n1 + n2;
//         cb(result);
//     }, 1000);
// }

// function mul(n, cb) {
//     setTimeout(function () {
//         let result = n * 2;
//         cb(result);
//     }, 700);
// }

// function sub(n1, cb) {
//     setTimeout(function () {
//         let result = n1 - 1;
//         cb(result);
//     }, 500);
// }

// add(4, 3, function(x) {

//     console.log('1: ', x);
//     mul(x, function (y) {
//         console.log('2: ', y);
//         sub(y, function (z) {
//             console.log('3: ', z);
//         });
//     });
// });

//프로미스로 수정해보자.
console.log("프로미스로 수정한 예제.");

function add(n1, n2, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            let result = n1 + n2;
            resolve(result); // 다음 기능에서 넘겨줄수 있게 결과값을 넣어준다.
        }, 1000);
    });

}

function mul(n, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            let result = n * 2;
            resolve(result);
        }, 700);
    });
    
}


function sub(n1, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            let result = n1 - 1;
            resolve(result);
        }, 500);
    });
}

//비교하라고 둔 콜백 함수 (잘못된)
// add(4, 3, function(x) {

//     console.log('1: ', x);
//     mul(x, function (y) {
//         console.log('2: ', y);
//         sub(y, function (z) {
//             console.log('3: ', z);
//         });
//     });
// });

add(4, 3)
    .then((result) => {
        console.log('1: ', result);
        return mul(result); //이것도 프로미스 이므로 then을 받을 수 있다.
    })
    .then((result)=>{
        console.log('2: ', result);
        return sub(result);
    })

    //결과
    .then((result)=>{
        console.log('3: ', result);
    })

    //에러났을 때
    .catch((err) => {
        console.log(err);
    }); //catch는 마지막에 한번만
    //이렇게 쓰면 콜백함수보다 읽기가 편하다. 순서대로라..

    // async , await과 함께 사용
