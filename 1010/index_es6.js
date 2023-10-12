// import add2 from "./math_es6.js";
//math_es6 파일에서 default로 export 하고있는 식별자를 add2라는 식별자로 받아옴
// console.log(add2(2, 3));


//package.json에는 주석처리가 안된다!!!
import {add} from "./math_es6.js";
import pi from "./math_es6.js";

console.log(add(5497, 6763));

console.log(pi);

console.log(pi,add(5497, 6763));

