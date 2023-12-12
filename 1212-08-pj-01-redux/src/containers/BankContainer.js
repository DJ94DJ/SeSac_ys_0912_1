import { useSelector, useDispatch } from "react-redux";
import { deposit, withdraw } from "../store/CalcReducer";
import React, { useState } from "react";
import Bank from "../components/Bank";

export function BankContainer() {
  // export default function BankContainer() { 이건 안됨
  const balance = useSelector((state) => state.counter.balance);
  // 키값(counter.)!!!! 꼭쓰자!!!!!! 리더님 감사합니다!!!!
  const dispatch = useDispatch();

  const [amount, setAmount] = useState("");

  const onDeposit = () => {
    dispatch(deposit(Number(amount)));
  };

  const onWithdraw = () => {
    dispatch(withdraw(Number(amount)));
  };

  return (
    <Bank
      balance={balance}
      amount={amount}
      setAmount={setAmount}
      onDeposit={onDeposit}
      onWithdraw={onWithdraw}
    />
  );
}
