// import { Box2Container, Box4Container } from "../containers/BoxesContainer";
import React from "react";

export default function Bank({
  balance,
  amount,
  setAmount,
  onDeposit,
  onWithdraw,
}) {
  return (
    <div>
      <h1>잔액: {`${balance}`}</h1>
      <input
        type="number"
        placeholder="금액을 입력해주세요"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        // onchange에 number를 넣으면 0이 안사라진다..!!!
      />
      <button onClick={onDeposit}>입금</button>
      <button onClick={onWithdraw}>출금</button>
    </div>
  );
}
// Box1는 AppRedux3(App.js)에서 불러오고 있어서 굳이 추출할 필요가 없다!

// 잘써도 껏다켜는 수밖에 없구나 ^^..
