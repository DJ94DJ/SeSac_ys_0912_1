import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function PhotoDetailPage() {
  const [Photo, setPhoto] = useState(null);
  const [error, setError] = useState("로딩");
  const { id } = useParams();
  console.log(id);
  //Photo/:id
  //param => {id: value, name: value }

  //~~?id=2&name=lily
  // 쿼리를 가져오고 싶을 땐?
  // const [query, setQuery] = useSearchParams();
  // console.log(query); // URLSearchParams {size: 1}
  // console.log(query.get("name")); // lily
  // query

  //Link컴포넌트를 이용하지 않고 , js 함수 내부에서 페이지를 이동시키는 코드를 작히
  const navigator = useNavigate();

  const getPhoto = async () => {
    try {
      // 오류가 날 수도 있는 코드를 try 안에 넣는다.
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      );
      if (res.ok) {
        const prod = await res.json();
        setPhoto(prod);
      } else {
        throw Error("존재하지 않는 상품입니다.");
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
      //   setError(error);
    }
    //try 안에서 오류가 발생하면 catch로 이동함.
  };

  useEffect(() => {
    getPhoto();
  }, []);
  return (
    <>
      <div>제품 상세페이지</div>
      <button onClick={() => navigator("/")}>홈으로</button>
      <button onClick={() => navigator(-1)}>목록으로</button>

      {/* setQuery는 인자로 보내준 정보를 이용하여 새로운 쿼리를 만들고
      <button onClick={() => setQuery({ name: "codee" })}>
        setQuery 테스트
      </button> */}

      {Photo ? (
        <>
          <ul>
            <li>번호 {Photo.id}</li>
            <li>
              <img src={Photo.url} />
            </li>
          </ul>
        </>
      ) : (
        <div>{error}</div>
      )}
    </>
  );
}
