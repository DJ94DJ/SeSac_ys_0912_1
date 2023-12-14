// 함수 오버로딩
function sum(a, b) {
  console.log("bbbbb");
  console.log(a);
  console.log(b);
  return a + b;
}

function sum(a, b, c) {
  console.log("aaaaa");
  console.log(a);
  console.log(b);
  console.log(c);
  return a + b + c;
}

sum(1, 2);
