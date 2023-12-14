// Generic
// 기본적으로 선언할 때 type을 지정을 해주는데 ,
// 사용하다 보면 , 다양한 타입에 대해서 처리를 해줘야 할 수 있음
// 제너릭은 선언을 미리하는 게 아님, 사용할 때 해당 타입을 넘겨 지정 가능한 기능
function printXY(x: number, y: number): void;
function printXY(x: string, y: string): void;

function printXY(x: number | string | object, y: number | string | object) {
  console.log(x, y);
}

printXY(1, 2);
printXY("a", "b");
// PrintXY("a", 1);

// 제너릭으로 해결 가능
function printXYByGeneric<T>(x: T, y: T) {
  console.log(x, y);
}
printXYByGeneric<string>("a", "b");
printXYByGeneric<number>(1, 2);
printXYByGeneric<number | string>("a", 2);

function srtPrintXY(x: string, y: string) {
  console.log(x, y);
}

srtPrintXY("a", "b");

const numArrLength_1 = (arr: number[]): number => arr.length;

function numArrLength(arr: number[]): number {
  return arr.length;
}
function strArrLength(arr: string[]): number {
  return arr.length;
}

// 만약? 객체 배열, 이 외 다른 타입의 배열도 length를 구하는 함수를 만들고 싶다면? = 제너릭이 답
function arrLength<T>(arr: T[]): number {
  return arr.length;
}

arrLength<string>(["a", "b"]);

function exampleGeneric<T, U>(x: T, y: U) {
  console.log(x, y);
}
exampleGeneric<string, number>("a", 1);
// exampleGeneric<string, number>(1, "9"); 오류남

let a: string[];
let b: Array<string>;

interface Phone<T> {
  company: string;
  model: string;
  option: T;
}

interface SamsungOption {
  a: string;
  b: number;
}

interface AppleOption {
  z: string;
  c: number;
}

const samsung23: Phone<SamsungOption> = {
  company: "samsung",
  model: "galaxy",
  option: {
    a: "a",
    b: 1,
  },
};

const iphone15: Phone<AppleOption> = {
  company: "apple",
  model: "iphone 15",
  option: {
    z: "1",
    c: 12,
  },
};

function arrElement<T>(arr: T[], indexnum: number): T | boolean {
  console.log("*제너릭 실습입니다*");
  if (arr.length <= indexnum) {
    console.log("제너릭 실습 1: 배열 생성");
    return false;
  } else {
    console.log("제너릭 실습 2: 배열값 넘어갈시 false 반환");
    return arr[indexnum];
  }
}

console.log(arrElement<string>(["hambuger", "poke", "sushi", "steak"], 3));
console.log(arrElement<string>(["hambuger", "poke", "sushi", "steak"], 108));
