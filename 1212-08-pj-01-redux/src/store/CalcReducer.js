const DEPOSIT = "counter/DEPOSIT";
const WITHDRAW = "counter/WITHDRAW";

// 발생할 수 있는 액션을 return하는 함수임.
// 왜? = 액션 type의 이름이 바뀐다고 가정하면,
//액션을 발생시키는 모든 곳(디스패치)에서 action.type를 다 변경해야함.
// 이를 해결하기 위해 이렇게 만듦
export const deposit = (amount) => {
  return {
    type: DEPOSIT,
    payload: amount,
  };
};

export const withdraw = (amount) => {
  return {
    type: WITHDRAW,
    payload: amount,
  };
};

const initialValue = {
  balance: 0,
};

const CalcReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "DEPOSIT": // 상수 선언 전 ver.3
    case DEPOSIT: // 상수 선언 후 ver.3-1
      // 케이스 두개 쓰면 두가지 케이스 만족시 하단 진행
      // 그냥해도 상관없으나 앞서 중복된거 있을까봐 해놓음.
      return { balance: state.balance + action.payload };
    case "WITHDRAW":
    case WITHDRAW:
      return { balance: state.balance - action.payload };
    default:
      return state;
  }
};

export default CalcReducer;
