const crypto = require("crypto");
const bcrypt = require("bcrypt");

function createHashedPw(pw) {
  return crypto.createHash("sha512").update(pw).digest("base64");
  //   return crypto.createHash("sha512").update(pw+salt).digest("base64");
}

console.log("pw 1234 :", createHashedPw("1234"));
console.log("pw 5555 :", createHashedPw("5555"));
console.log("pw 5551 :", createHashedPw("5551"));

const input = "1234";
const db_pw =
  "1ARVn2Auq2/WAqx2gNrL+q3RNjAzXpUfCXrzkA6d4Xa22yhRLy4AC50E+6UTPoscbo31nbOoq51gvkuXzJ6B2w==";

console.log("결과 비교 :", createHashedPw(input) == db_pw); //true

// const dbPwSalt =
//   "FOrXNDRq0PiGgy7rUqKjyQfCgIPkEsL8FkXKFHGDEcYZE+BitzkFctq1A3ys711ML5Kr55ip5UGsGjtzvaEuog==";
// console.log("비교 결과 :", createHashedPwWithSalt(input) == dbPwSalt);

function comparePw(pw, salt) {
  const iterations = 100;
  const keylen = 64;
  const digest = "sha512";
  return crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, digest)
    .toString("base64");
}

function createHashedPwWithSalt(pw) {
  const salt = crypto.randomBytes(16).toString("base64");
  console.log("salt test", salt);
  const iterations = 100;
  const keylen = 64;
  const digest = "sha512";
  return crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, digest)
    .toString("base64");
  // 암호 대상 문자열, salt, 반복횟수, 키의 길이, 알고리즘
}

// function aa() {
//     if("1234" == "1234") return true
//     return false

//     이것보단

//     return "1234" == "1234"
// }

const dbPwSalt =
  "PFM97dH/oJZk0sDS6qNJJvXZQdf2i9wYgShVFm+xBRWY+9LZQzSWQf6dvWbZEx7DWpmvGg6ClIjtiihWDwX3Og==";
const dbSalt = "3UVPDacUXVGzkivYv4HeIg==";
console.log("compare result with salt: ", comparePw(input, dbSalt) == dbPwSalt);

// console.log("pw 1234 with salt: ", createHashedPwWithSalt("1234"));

console.log("pw salt:", createHashedPwWithSalt("1234"));

// 비크립트

const salt = 10; // 암호화에 사용할 salt의 수준을 설정합니다. 정수사용

function bcryptPw(pw) {
  return bcrypt.hashSync(pw, salt);
}

console.log("비크립트", bcryptPw("1234"));

const bcryptPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};

const comparePassword = (password, dbPassword) => {
  return bcrypt.compareSync(password, dbPassword);
};

function comparePw(pw, dbPw) {
  return bcrypt.compareSync(pw, dbPw);
}

const dbPw = bcryptPw("1234");

console.log("비크립트 pw 1234: ", dbPw);
console.log("비크립트 compare pw: ", comparePw("1234", dbPw));

//비크립트 $2b$10$4dxU/OKvDn9fR0V47mVIeuz/XJrbKvsQgeSQ6wijczu8OKDikpNne
