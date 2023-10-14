const cat = {
    name : "나비",
    age: 2,
    mew: function(){
        console,log("야옹");
    }
};
const cat2 = {
    name : "장화",
    age: 80,
    mew: function(){
        console,log("야옹");
    }
};
const cat3 = {
    name : "코코",
    age: 5,
    mew: function(){
        console,log("야옹");
    }
};







//class는 PascalCase 규칙을 이용해서 식별자 생성
//camelCase에서 첫글자를 대문자로~
//PascalCase는 첫글자도 대문자로!!
class Cat {
    //constructor는 생성자(메소드의 일종)
    //class 내부에서 메소드 만들때는 function 안붙이고 바로 사용가능(){}
    // (메소드 중에서) Cat 클래스를 이용해서 객체를 만드는 순간에 호출되는 메소드가  constructor
    //constructor() 여기의 괄호랑 Cat 뒤의 () 매개변수값이 같아야 됨

    //constructor() 에 고양이의 정보가 담겨있음.
    constructor(name2, age2){
        this.name =name2;
        this.age =age2;
    }

    //함수(메소드) 선언
    mew()  {
        console.log("야옹")}; 

    // 고양이의 정보를 콘솔로 찍는 메소드
    info() {
        console.log(`이름은 : ${this.name}, 나이는 : ${this.age}`) // 백틱``을 써야 된다 백틱은 큰 따옴표가 아니라 숫자키 맨 왼쪽에 있음 
        this.name
    }
}
//cat class를 이용해서 새로운 객채를 만들겎다
//객체 생성할 때 매개변수 인자 두개를 넘겨줘야 겠죠??

console.log("")
console.log("1. 수업. Cat 클래스 만들기를 실행합니다.")
const cat4 = new Cat("나비", 2);
const cat5 = new Cat("장화", 2);
console.log(cat4.name, cat5.name);
cat4.mew();
cat4.info();
console.log("종료.")


console.log("")
console.log("2. 실습. Shape 클래스 만들기를 실행합니다.")
// 실습. Shape 클래스 만들기
const Shape1 = {
    width : 3,
    Height: 4,
};

class Shape {
    constructor(width2, height2){
        this.width =width2;
            this.height =height2};

        getArea() {
            console.log(`가로는 : ${this.width}, 세로는 : ${this.height}, 따라서 총 면적은 ${this.width*this.height}`)
        };
    }

let rec1 = new Shape(3, 4);
console.log(rec1.getArea());

console.log("종료.")
console.log("")

console.log("")
console.log("3. 수업. House 클래스 만들기를 실행합니다.")
class House {
    // 생성자 함수, 객체의 속성(내부에서 사용할 변수) 부여
constructor(name, year) {
    this.name = name;
    this.year = year;
    }

age() {
    console.log(`이 건물은 ${new Date().getFullYear() - this.year}년 되었습니다`) 
    }
}

const home = new House ("새싹", 2022);
home.age();
console.log("종료.")
console.log("")


console.log("")
console.log("4. 수업. house 상속 Apartment 클래스 만들기를 실행합니다.")

//Q. 이렇게 중복이 될때 한번에 할 수 있을까?
// class Personal {
//     constructor(){
//         이름
//         나이
//         주민번호
//     }

//     //밥을 먹는다
//     //잠을 잔다
// }

// class Student {
//     constructor(){
//         이름
//         나이
//         주민번호
//         학번 (이거만 추가)
//     }

//     //밥을 먹는다
//     //잠을 잔다
    
// }

//상속하기

class Apartment extends House {
    constructor(name, year, floor) {
        //부모(house)의 생성자 호출
        super(name, year);
        this.floor = floor;
    }

    //오버라이딩 : 부모의 있는데 메소드를 자식이 다시 정의하는 것
    age() {
        super.age();
        //console.log(`이 건물은 ${new Date().getFullYear() - this.year}년 되었습니다`);
        console.log(`입주는 ${this.year + 1}부터 시작했습니다,`);
    };
}
console.log("종료.")
console.log("")




//오버로딩 : 똑같은 이름으로 여러 함수를 선언하기 (매개변수 다름)
const apart = new Apartment("래미안 아파트", 2013, 25);
console.log(apart.name, apart.floor);
apart.age();

console.log("")
console.log("4. 수업. 오버로딩 테스트를 실행합니다. 참고로 JS는 오버로딩의 개념이 없다고 합니다.")




// function test(a, b) {
//     console.log(`a: ${a}, b: ${b}`);
// }

// function test(a, b, c) {
//     console.log(`a: ${a}, b: ${b}, c: ${c}`); 
    
// }
test(2, 5);
//a: 2, b: 5, c: undefined
//자바스크립트는 모든 변수를 선언하지 않아도 좋다.

//undefined 해결하고 싶다면? 조건에 따라서 이렇게 처리될 수 있도록 수정.
function test(a, b=0, c=0) {
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
    return a + b + c; 
}
console.log("종료.")
console.log("")

console.log("")
console.log("2. 실습 두번째. Rectangle 클래스 상속 만들기를 실행합니다.")


class Rectangle extends Shape {
    constructor(width, height){
        super(width, height);
    }
     
        getDiagonal() {
            let answer = Math.sqrt(this.width**2 + this.height**2);  //Math.sqrt는 제곱근값을 구하는 함수
            console.log(`대각선 값은 ${answer} 입니다.`);
            // 다른 방법 : return Math.sqrt(this.width**2 + this.height**2);      
    }
        
    }

let rec2 = new Rectangle(3, 4);
rec2.getArea();
rec2.getDiagonal();
//다른 방법 : console.log(`대각선 값은 ${rec2.getDiagonal()} 입니다.`);

console.log("종료.")
console.log("")


// 선택 2
console.log("")
console.log("3. 실습 세번째, Shape 클래스 상속 만들기를 실행합니다.")

class Triangle extends Shape { 
        getArea() {
            console.log(`이 삼각형의 가로는 : ${this.width}, 세로는 : ${this.height}, 따라서 총 면적은 ${(this.width*this.height)/2}`); 
    }
    }

class Circle extends Shape { 
    constructor(width){
        super(width, 0); // 가로(지름) 세로는 필요없으니까 0으로 넘긴다
        this.radius = width/2; // 반지름
    }

    getArea() {  
        console.log(`이 원의 지름은 : ${this.width}, 따라서 총 면적은 ${((this.radius)**2)*3.14}`);    
    }
    }

let Tri1 = new Triangle(3, 4);
let cir1 = new Circle(3);

console.log("종료.")
console.log("")

Tri1.getArea();
cir1.getArea();

//터미널 실행시 해당 위치에서 노드 실행하기
//PS C:\Users\SBA_USER\desktop\github\SeSac_ys_0912_1\1012_node-backend\js-hard> node .\class.js

//-다음
//non-blocking io 비동기 처리를 배우기






