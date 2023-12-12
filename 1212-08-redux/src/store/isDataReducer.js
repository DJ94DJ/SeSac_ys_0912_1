const initialValue = false;

const isDataReducer = (state = initialValue, action) => {
  switch (action.type) {
    // 리듀셔의 액션도 이름 겹치지 않도록 구조화가 팔요하다.

    case "CHANGE":
      return !state;
    default:
      return state;
  }
  // 액션타입으로 스위치
};

export default isDataReducer;
