import { useCallback, useState, useEffect } from "react";

//useCallback : 함수를 기억함.
//컴포넌트가 렌더링시, 컴포넌트 내부에 있는 함수도 재선언하게됨.
// 다시 선언할 필요가 없는 함수 대신 이전 미리 선언 함수 활용 기능 = Callback

export default function UseCallbackEx2({ postId }) {
  const [post, setPost] = useState();
  const [text, setText] = useState("");

  const fetchData = useCallback(async () => {
    console.log("게시물을 띄웁니다");
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    const post = await res.json();
    setPost(post);
  }, [postId]);
  // 포스트 아이디 변경될떄마다 함수 실행됨.

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <h1>useCallback 공부2 </h1>
      <div>조회한 포스트 ID : {postId}</div>

      {post && (
        <div>
          <div> id:{post.id} </div>
          <div> title:{post.title} </div>
          <div> body:{post.body} </div>
        </div>
      )}
    </>
  );
}

// useMemo vs useCallback
// useMemo : 특정값 기억해서, 불필요한 연산방지
// useCallback : 특정 함수 기억하여 불필요한 재선언 방지
