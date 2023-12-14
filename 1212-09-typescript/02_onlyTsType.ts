// or 이런식으로 쓸수있어.
type gender = "Men" | "Women";
type twoNum = "5" | "1";
// const lily: gender = "245" 오류

// 튜플 타입도 정할수 있어. [상품명, 가격]
type productInfo = [string, number];
const cola: productInfo = ["cola", 2500];

// 객체에 대한 타입지정은 이렇게
interface productInfo2 {
  productName: string;
  price: number;
}

const cider: productInfo2 = { productName: "cider", price: 2500 };
// const cider: productInfo2 = {productName: "cider", price: 2500, sale: 10 }
// sale은 지정되지 않은 값 = 오류

// 있거나 없거나 한 값은 ?를 넣는다.
type productInfo3 = {
  productName: string;
  price: number;
  sale?: number | undefined;
  // ? = 사실상 저런 느낌임.
};

const beer: productInfo3 = { productName: "cider", price: 2500, sale: 10 };
console.log(beer.sale);

// 객체선정에는 인터페이스가 타입보다 자주쓸거임.
interface Seller {
  name: String;
}

type productInfo4 = {
  productName: string;
  price: number;
  sale?: object;
  seller?: Seller;
};

const pina: productInfo4 = {
  productName: "피나 콜라타",
  price: 2000,
  seller: { name: "이도준" },
};

// 해당 요소는 undefind가 날수 있어서 원래는 오류가 난다.
// undefined에는 aaa 함수 or 속성이 없습니다.
console.log(pina.seller?.name);
// 옵셔널 체이닝 (optional chainnig)

interface Person {
  name: string;
  age: number;
}

// 앞서 선언된 인터페이스를 연장해서 사용
interface Student extends Person {
  studentID: string;
  //   eat: (amount: number) => void;
  eat: () => void;
  // 매개변수도 없고, 리턴값도 없는 함수
  //   리턴값이 없을때 리턴값 자리엔 void를 기입한다. (괄호 안은 매개변수)
  //   함수 자료형도 가능
}

const Per: Person = { name: "dj", age: 30 };
const Stu: Student = {
  name: "dj",
  age: 30,
  studentID: "89번",
  eat: () => console.log("암냠냠"),
};

interface Game {
  title: string;
  price: number;
  category: string;
  platform: string;
  desc?: string;
}

const heroGame_A: Game = {
  title: "DC 언체인드",
  price: 50000,
  desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
  category: "액션",
  platform: "모바일",
};

const heroGame_B: Game = {
  title: "MARVEL 퓨처파이트",
  price: 65000,
  category: "롤플레잉",
  platform: "모바일",
};
