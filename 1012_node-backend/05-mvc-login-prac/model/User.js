let users = 
`lily//12345//또다른릴리
spreatics//12341234//코딩온
codee//4321//코디
lily//1234//릴리`

let str = users.split("\n")

const userlistcase = [];
for (let i=0; i < str.length; i++) {
  let temp = str[i].split("//");
  userlistcase.push({
    id: temp[0],
    pw: temp[1],
    userName: temp[2],
  })
};

exports.userlistcase = () => {
  return userlistcase;
};

console.log(userlistcase);

// exports.getUser = () => {
//   const id = "lily";
//   const pw = "12345";
//   return { id, pw };
//   //   {id: "lily", pw: "12345"}
// };

// users.split("\n"): 이 코드는 users 문자열을 줄바꿈(개행 문자, \n)을 기준으로 여러 개의 문자열로 나누는 역할을 합니다. 
// 예를 들어, 위에서 users 문자열은 총 3개의 줄로 이루어져 있으므로, split("\n")을 사용하면 3개의 문자열이 담긴 배열이 생성됩니다.

// for문: for문은 반복적인 작업을 자동화하기 위해 사용됩니다. 
// 코드 for(let i=0; i<str.length; i++)는 i라는 변수를 0부터 시작해서 str.length만큼 1씩 증가시키면서 반복문 내의 코드를 실행시킵니다. 
// 여기서 str.length는 str 배열의 길이, 즉 str 배열에 담긴 문자열의 개수를 의미합니다. 
// 따라서 이 for문은 str 배열에 담긴 모든 문자열에 대해 반복문 내의 코드를 실행시키는 역할을 합니다.

// str[i].split("//"): 이 코드는 str 배열의 i번째 문자열을 //를 기준으로 여러 개의 문자열로 나누는 역할을 합니다.
// 예를 들어, str[i]가 "spreatics//12341234//코딩온"이라면, split("//")을 
// 사용하면 ["spreatics", "12341234", "코딩온"]이라는 배열이 생성됩니다.

// userlistcase.push(): push 함수는 배열에 새로운 요소를 추가하는 역할을 합니다. 
// 여기서는 push 함수를 사용해 userlistcase 배열에 새로운 객체를 추가하고 있습니다.
// 이를 통해 users 문자열을 여러 개의 사용자 정보로 나누고, 
// 각 사용자 정보를 객체 형태로 userlistcase 배열에 저장하는 작업을 수행하고 있습니다.