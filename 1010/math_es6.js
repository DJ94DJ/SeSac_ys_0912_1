const add = (a, b) => a + b;
const minus = (a, b) => a - b;
const pi = 3.14;

//1) 하나만 내보낼 경우
//module.exports = add (common js 문법)
// export default add;

//2) 여러개 내보낼 경우
//module.exports = {
//    add,
//   minus,
//}; (common js 문법)

export default pi;
// export pi; //오류 코드 디폴트를 안적으면 꼬인다.
export { add, minus };