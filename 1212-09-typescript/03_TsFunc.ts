// function abc () {
// console.log("abc")
// }

// 타입에서 함수 쓰려면 타입지정 필요 (결과값도 지정할수 있다)
function sum(a: number, b: number): number {
  return a + b;
  //   return "hello";
}

// console.log(sum(1)) 오류남.
console.log(sum(1, 2));

// 함수자체 type -> 함수가 실행되어 결국 return 값
//? = 필수 아니란 뜻
const sum1 = (a: number, b: number): number => {
  return a + b;
};

//?는 undef 될 상황을 고려해서 if문을 써야함.
// 옵셔널 매개 변수
const sum1_1 = (a: number, b?: number): number => {
  //b가 있을시~
  if (b) return a + b;
  return a;
};

interface Calculator {
  sum: (a: number, b: number) => number;
  sub?: () => void;
}

const calc: Calculator = { sum: sum };

console.log("칼큘레이터", calc);

// 함수의 끝에 도달할수 없는 경우에 활용가능한 형식
function goingOn(): never {
  while (true) {
    console.log("go");
  }
}

// const hello = (): void => {
// 함수 리턴 값 없을 때 사용

// 함수 오버로딩 구현해보기
// 오버로딩? >> 함수 이름은 같으나 형태가 다른 함 (매개변수의 타입, 반환값, 개수가 다르다던지..)
function hello(num: number): number;
function hello(num: number, num2: number): number;
function hello(str: string, str2: string): string;

// function hello(param: any) {
function hello(param: number | string, param2?: number | string) {
  console.log(param);
  console.log(param2);
  return param;
}

hello(11);
hello(11, 21);
hello("a1", "a2");
// hello("a",2); 이건안됨 앞서 정의 안되서.

// function hello = (): string | void => {
//   console.log("hello");
//   return "hello";
//   //
// };

// function hello = (num:number): string | void => {
//   console.log("hello");
//   return "hello";
//   //
// };

function pj_sum1(num: number, num2: number): number {
  const result = num + num2;
  console.log("첫번째 실습입니다.", `${num} + ${num2}`);
  console.log({ result });
  return result;
}

pj_sum1(100, 200);

function pj_sum2(...nums: number[]): number {
  const result = nums.reduce((acc, curr) => acc + curr, 0);
  console.log("두번쨰 실습입니다.", `${nums.join(" + ")}`);
  console.log({ result });
  return result;
}

pj_sum2(10, 20, 5, 13);
pj_sum2(10, 5, 38);
pj_sum2(10, 5, 1, 1, 6, 20);
