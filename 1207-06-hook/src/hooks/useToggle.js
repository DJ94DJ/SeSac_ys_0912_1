import { useState } from "react";
// 컴포넌트가 아니니 소문사 use로 시작 (component는 대문자로!)
// Toggle기능은 자주쓰이는데, true -> false, fales -> ture로 변환시키는 등의..
// 이에 따라 처리를 할 일이 자주 생긴다 라고 가정
export default function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => {
    setValue(!value);
  };

  return [value, toggle];
  //배열로 리턴 - 구조분해해서 사용가능
  // 객체로 리턴도 가능하다
}

// 규칙:Hooks 폴더 하위로 만들고 use 소문자로 시작해서 파일 만들기!
