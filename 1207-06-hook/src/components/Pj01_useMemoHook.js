import React, { useMemo, useState } from "react";

export default function UseMemoHook() {
  const [text, setText] = useState("");
  const [searchWord, setSearchWord] = useState("");

  const countOccurrences = (text, searchWord) => {
    const words = text.split(" ");
    return words.filter((word) => word === searchWord).length;
  };

  const text_repeat_num = useMemo(
    () => countOccurrences(text, searchWord),
    [text, searchWord]
  );

  // import useTextrepeat from "../hooks/useTextrepeat";

  // export default function UseMemoHook() {
  //   const [text, setText, searchWord, setSearchWord, text_repeat_num] =
  //     useTextrepeat();

  return (
    <>
      <h1>실습01. useMemoHook </h1>

      <input
        className="word"
        type="text"
        placeholder="텍스트를 입력하세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        className="search"
        type="text"
        placeholder="찾고자 하는 단어를 입력하세요"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <div>
        "{searchWord}" 단어의 빈도수: {text_repeat_num}
      </div>
    </>
  );
}
