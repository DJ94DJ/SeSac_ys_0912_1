const { doesNotReject } = require("assert");

const fruits = ["apple", "banana", "grape", pear = "pear"];

const [apple2, banana2, grape2] = fruits;
console.log(apple2, pear);

// 사실상 아래 코드와 동일작업
// const apple2 = fruits[0]
// const banana2 = fruits[1]
// const grape2 = fruits[2]

let x = 1, y = 3;
[x, y] = [y, x];

//x=y; // x=3 y=3
//y=x; //  y=3 x=3

// let temp = x;
// x = y;
// y= temp;

console.log(x, y);
//한번에 잘된다? 안됨






const obj = {
    name: "dj",
    gender: "남",
    age: 30,
}

//  key 이름 바꾸는 법
const {age, name, gender, love = "love", name: name2 } = obj;
console.log(age, love, name2);

// 사실상 아래 코드와 동일작업
// const age = obj.age;
// const name = obj.name;
// const gender = obj.gender;


const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a", "b", "c", "b", "e"];

// [1,2,3,4,5,"a", "b", "c", "b", "e"]
// const arr3 = arr1[0]~~~~~, arr2[0], arr2[1], ~~~] 이건 말안됨
// for()

//...의 역할 :[1,2,3,4,5] => 1,2,3,4,5 
const hello = [..."hello"];
console.log(hello);

const arr3 = [...arr1, ...arr2];

console.log("arr3", arr3);


//실습1. spread 연산자 사용하기

const word1="abc";
const word2="xyz";
const word3 = [...word1,...word2];
console.log("word3는 다음과 같아요", word3);



