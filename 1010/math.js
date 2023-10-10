const add = (a, b) => a + b;
const minus = (a, b) => a - b;
const PI = 3.14;




//case1 한개의 식별자만 모듈화 하려면..!!
// module.exports = add;
// module.exports.add = (a, b) => a + b;
// module.exports.minus = (a, b) => a - b;
// module.exports.PI = 3.14;
//이렇게 하면 케이스 2,3과 똑같음





//case2,3 여러 식별자 객체로 내보내기
module.exports = {
    add,
    minus,
    PI,
}





// 
// {
//     add : add,
//     minus : minus,
//     PI : PI,
// }
// //add란 key로 add값을 넘기고.. 어쩌구



// {
//     name: "DJ";
//     gender: "male";
// }


// 이 함수를 내보내겠다는 뜻

// 위아래는 같은 코드 

// const add2 = (a, b) => {
//     return a+ b;
// }