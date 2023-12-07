import { useMemo, useState } from "react";

export default function useTextrepeat() {
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

  return [text, setText, searchWord, setSearchWord, text_repeat_num];
}
