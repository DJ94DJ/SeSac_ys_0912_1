//console.log("프로미스와 어싱크 어웨잇로 수정한 예제.");

async function add(n1, n2, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            let result = n1 + n2;
            resolve(result); // 다음 기능에서 넘겨줄수 있게 결과값을 넣어준다.
        }, 1000);
    });

}

async function mul(n, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            let result = n * 2;
            resolve(result);
        }, 700);
    });
    
}


async function sub(n1) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            let result = n1 - 1;
            resolve(result);
        }, 500);
    });
}

// 1.async함수는 promise를 return 한다.
// 2.await함수는 async함수 내부에서만 사용가능

async function exec() { //executer 의 약자 
   const x = await add(4,3);
   console.log('async 1: ', x); //x=7 어웨잇을 쓰면 실행되는 동안 기다렸다가 저 값에 담을 수 있다.
   
   const y = await mul(x); 
   console.log('async 2: ', y); //y=14
   
   const z = await sub(y); 
   console.log('async 3: ', z); //z=13

   //만약 어웨잇 잘못쓰면 앞에 a에 점이 쫑쫑 박힌다. (쓸데없는 코드일경우)
}




// async function test() {
//     console.log;("test");
// }
// console.log(test());


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

// add(4, 3)
//     .then((result) => {
//         console.log('1: ', result);
//         return mul(result); //이것도 프로미스 이므로 then을 받을 수 있다.
//     })
//     .then((result)=>{
//         console.log('2: ', result);
//         return sub(result);
//     })

//     //결과
//     .then((result)=>{
//         console.log('3: ', result);
//     })

//     //에러났을 때
//     .catch((err) => {
//         console.log(err);
//     }); //catch는 마지막에 한번만
//     //이렇게 쓰면 콜백함수보다 읽기가 편하다. 순서대로라..

//

//원래 마트 음료수 코드를 어싱크 어웨잇으로 수정해보자!
console.log("****어싱크 어웨잇, promise를 이용해 수정한 코드를 실행합니다.");


// const {resolve} = require("path");
function goMart() {
    console.log("마트에 가서 어떤 음료를 살지 고민하기.");
}

let product;
let price;

async function pickDrink(callback) { //아님 cb라고 적는다. 여기서 이 함수는 정의만 하는 것 (실행 안함 실행시키는 코드는 안의 setTimeout에 있음) 
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("무얼 마실지 결정했다");
            product = "제로 콜라";
            price = 2000; //이때까지 결정되면 성공이니, 이 뒤에 리졸브를 넣는다.
            resolve(); //이때 원하는 작업이 끝났다.실패를 알릴필요가 없다면 리젝트 안써도 됨.
        }, 3000);
        setTimeout(function(){console.log("3");}, 1000);
        setTimeout(function(){console.log("2");}, 1500);
        setTimeout(function(){console.log("1");}, 2000);
    })

    // 3초 뒤에 고민이 끝남
};

async function pay(product, price) {
    console. log(`상품명: ${product}, 가격: ${price}`);
};



// goMart();
// pickDrink().then(() => {
//     pay(product, price);
// }); 
// //pay라는 함수에 인자로 넘긴다는 뜻! 그러니 이름만 넘긴다 ()까지 적으면 거기 안에서 실행시킨다는 다른 뜻이 된다.
// // pay(product, price);

async function exec() { //선언코드
    goMart();
    await pickDrink(); //리졸브를 만나면 성공으로 판단하고 다음으로 넘어감
    pay(product, price);
}

exec(); // 실행코드