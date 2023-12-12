// let str
const str: string = "hello";

// str = 5; 에러 발생함! (타입이 잡아줌💖)

console.log(str);

let num: number;
num = 108;
// num = "108"; 에러
// let undif: undefined = 5; 에러

// undefined = 5; 에러
let nu: null = null;
// nu = 3; 에러

// 숫자로 이루어진 배열의 type number[]
let arr: number[] = [1, 2, 3, 4, 5];

// 숫자로 이루어진 배열의 type number[]
let strarr: string[] = ["145", "가위"];
let strarr2: Array<string> = ["145", "가위"];
let strarr4: Array<number | string> = [145, "가위"];

// | = or 이란 뜻
let arr3: (number | string)[] = [1, "가위"];

let abc: number | string = "a";
abc = 5;

// 그러나 typescript에서 any를 사용하는 건 지양해야함. 객체도 들어감(중괄호)
let anyArr: any[] = [1, "A", null, undefined, {}];

// 예습 typescript interface...
// 전체를 아우르는 객체 오브젝트 타입
let obj: object = {
  name: "lily",
};

// Tuple
// 길이랑 자료형을 전부 맞춰여함.
let drink: [string, number] = ["cola", 1500];
console.log(drink[0]);
drink[0] = "cider";
console.log(drink[0]);

// push 메소드는 오류 못잡음
drink.push("aaa");
// drink2[2]; = 'aaaa'//erorr
// console.log(drink);

let drink2: readonly [string, number] = ["cola", 1500];
// (drink2[0]); = 'aaaa'//erorr
// readonly엔 푸시안됨

// Enum
// sun, rain, cloud 나열혐 자료 0부터 시작함.
enum Weather {
  sun = 0,
  rain = 1,
  cloud = 2,
}
// 이거도됨
// enum Weather {
//     sun,
//     rain,
//     cloud,
//   }

console.log(Weather.sun);

const weather = 0;
if (weather == Weather.sun) {
  console.log("맑네");
}

// let lie : Weather: 3 에러

enum Weather2 {
  sun = "sun",
  rain = "rain",
  cloud = "cloud",
}

console.log(Weather2.sun);

let olimpic_newgame: readonly [{ name: string; type: string }, boolean] = [
  {
    name: "쇼트트랙",
    type: "혼성계주",
  },
  true,
];

// olimpic_newgame[1]=false; 에러남
