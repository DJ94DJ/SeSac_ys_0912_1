import io from "socket.io-client";
import { useEffect, useRef } from "react";

const socket = io.connect("http://localhost:8000/", { autoConnect: false });
// 리액트에서 소켓 쓸 때 할 기본 밑작업

export default function Practice1() {
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };

  useEffect(() => {
    initSocketConnect();

    socket.on("resHello", (res) => {
      console.log(res);
      resultMsg(res);
    });

    socket.on("resStudy", (res) => {
      console.log(res);
      resultMsg(res);
    });

    socket.on("resBye", (res) => {
      console.log(res);
      resultMsg(res);
    });
  }, []);

  const resultMsg = (res) => {
    result.current.innerText = res.msg;
  };

  const hello = () => {
    socket.emit("hello", { code: "hello" });
  };

  const study = () => {
    socket.emit("study", { code: "study" });
  };
  const bye = () => {
    socket.emit("bye", { code: "bye" });
  };

  const result = useRef(null);

  return (
    <>
      <div>소켓 실습</div>
      <button onClick={hello}>hello</button>
      <button onClick={study}>study</button>
      <button onClick={bye}>bye</button>

      <p ref={result}></p>
    </>
  );
}
