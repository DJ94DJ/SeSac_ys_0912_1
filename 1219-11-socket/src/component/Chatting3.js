import "../styles/chat.css";
import { useCallback, useEffect, useState, useMemo } from "react";
import Chat from "./Chat";
import Notice from "./Notice";
import io from "socket.io-client";
import { getSvgPath } from "figma-squircle";

const svgPath = getSvgPath({
  width: 700,
  height: 700,
  cornerRadius: 80,
  cornerSmoothing: 0.85,
  // You can also adjust the radius of each corner individually
  preserveSmoothing: true,
});

const socket = io.connect("http://localhost:8000", { autoConnect: false });
export default function Chatting3() {
  const [msgInput, setMsgInput] = useState("");
  const [userIdInput, setUserIdInput] = useState("");
  const [chatList, setChatList] = useState([]);
  const [userId, setUserId] = useState(null);
  const [userList, setUserList] = useState({});
  const [dmTo, setdmTo] = useState("all");

  const initSocketConnect = () => {
    console.log("connected", socket.connected);
    if (!socket.connected) socket.connect();
  };

  useEffect(() => {
    socket.on("error", (res) => {
      alert(res.msg);
    });

    socket.on("entrySuccess", (res) => {
      setUserId(res.userId);
    });

    socket.on("userList", (res) => {
      setUserList(res);
    });
  }, []);

  const userListOption = useMemo(() => {
    // [<option></option>]
    const options = [];
    for (const key in userList) {
      // key : userList의 key값을 얻을 수 있다. (socket id)
      // userList[key] : userList의 value 값 (사용자가 입력한 id)
      if (userList[key] === userId) continue;
      options.push(
        <option key={key} value={key}>
          {userList[key]}
        </option>
      );
    }
    return options;
  }, [userList]);

  // useCallback: 함수를 메모라이징 한다
  // 뒤에 있는 의존성 배열에 있는 값이 update 될 때만 함수를 다시 선언함.

  //채팅 리스트 추가하기 (남인지 나인지 구분해서 추가)
  const addChatList = useCallback(
    (res) => {
      const type = res.userId === userId ? "my" : "other";
      const content = `${res.dm ? "(속닥속닥)" : ""} ${res.userId}: ${res.msg}`;
      const newChatList = [
        // 이전까지의 채팅 리스트에
        ...chatList,
        // 채팅 추가
        { type: type, content: content },
      ];
      setChatList(newChatList);
    },
    [userId, chatList]
  );

  useEffect(() => {
    socket.on("chat", addChatList);
    return () => socket.off("chat", addChatList);
  }, [addChatList]);

  // 공지 파트
  useEffect(() => {
    const notice = (res) => {
      const newChatList = [...chatList, { type: "notice", content: res.msg }];
      setChatList(newChatList);
    };

    socket.on("notice", notice);
    return () => socket.off("notice", notice);
  }, [chatList]);

  // 메시지 보내기
  const sendMsg = () => {
    if (msgInput !== "") {
      socket.emit("sendMsg", { userId: userId, msg: msgInput, dm: dmTo });
      setMsgInput("");
    }
  };

  // 채팅방 입장
  const entryChat = () => {
    initSocketConnect();
    socket.emit("entry", { userId: userIdInput });
  };
  return (
    <>
      <div className="page">
        가나다라마바사
        <h3>실습 4, 5번</h3>
        <ul>
          <li>채팅창 메세지 전송</li>
          <li>DM 기능 구현</li>
        </ul>
        <div
          className="center"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="backdrop-container"
            style={{
              width: 700,
              height: 700,
              // clipPath: `path('${svgPath}')`,
              // backgroundColor: "ghostwhite",
              // filter: "drop-shadow(0rem 0rem 50px red)",
            }}
          >
            <div className="app-container">
              {userId ? (
                <>
                  <div>{userId}님 환영합니다.</div>
                  <div className="chat-container">
                    {chatList.map((chat, i) => {
                      if (chat.type === "notice")
                        return <Notice key={i} chat={chat} />;
                      else return <Chat key={i} chat={chat} />;
                    })}
                  </div>
                  <div className="input-container">
                    <select
                      value={dmTo}
                      onChange={(e) => setdmTo(e.target.value)}
                    >
                      <option value="all">전체</option>
                      {userListOption}
                    </select>
                    <input
                      type="text"
                      value={msgInput}
                      onChange={(e) => setMsgInput(e.target.value)}
                    />
                    <button onClick={sendMsg}>전송</button>
                  </div>
                </>
              ) : (
                <>
                  <div className="input-container">
                    <input
                      type="text"
                      value={userIdInput}
                      onChange={(e) => setUserIdInput(e.target.value)}
                    />
                    <button onClick={entryChat}>입장</button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="backdrop-container2" style={{ filter: "blur(1px)" }}>
          <div
            className="white-drop"
            style={{
              width: 700,
              height: 700,
              clipPath: `path('${svgPath}')`,
              background:
                "linear-gradient(135deg,rgba(224,225,232,255),  rgba(255,255,255,255))",
              // filter: "drop-shadow(0rem 0rem 50px red)",
            }}
          ></div>
        </div>
        <div
          className="backdrop-container-shadow1"
          style={{
            width: 700,
            height: 700,
            borderRadius: 60,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
            filter: "blur(30px)",
            // filter: "drop-shadow(0rem 0rem 50px red)",
          }}
        ></div>
        <div
          className="backdrop-container-shadow2"
          style={{
            width: 700,
            height: 700,
            borderRadius: 60,
            backgroundColor: "rgba(37, 37, 60, 0.2)",
            filter: "blur(20px)",
            // filter: "drop-shadow(0rem 0rem 50px red)",
          }}
        ></div>
      </div>
    </>
  );
}
