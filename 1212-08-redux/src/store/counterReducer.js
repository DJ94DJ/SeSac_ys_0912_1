const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

// 발생할 수 있는 액션을 return하는 함수임.
// 왜? = 액션 type의 이름이 바뀐다고 가정하면,
//액션을 발생시키는 모든 곳(디스패치)에서 action.type를 다 변경해야함.
// 이를 해결하기 위해 이렇게 만듦
export const increase = () => ({ type: INCREMENT });
export const decrease = () => ({ type: DECREMENT });

const initialValue = { number: 100 };

const counterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "INCREMENT": // 상수 선언 전 ver.3
    case INCREMENT: // 상수 선언 후 ver.3-1
      // 케이스 두개 쓰면 두가지 케이스 만족시 하단 진행
      // 그냥해도 상관없으나 앞서 중복된거 있을까봐 해놓음.
      return { number: state.number + 1 };
    case "DECREMENT":
    case DECREMENT:
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default counterReducer;
