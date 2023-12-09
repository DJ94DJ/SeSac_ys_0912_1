import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Photopage() {
  const [Photo, setPhoto] = useState();
  const getPhotos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const Photos = await res.json();
    setPhoto(Photos);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      <div>여기는 사진 페이지</div>
      {Photo ? (
        <>
          {Photo.map((value) => (
            <ul key={value.id}>
              <li>앨범 아이디{value.albumId}</li>
              <li>사진명 {value.title}</li>
              <li>
                <img src={value.thumbnailUrl} />
              </li>
              <li>
                {/*· /Photo/1, /Photo/2...3 */}

                {/* /슬래쉬를 적어서 이을 수 있다. */}
                <Link to={`/Photos/${value.id}`}>사진 상세로 이동 </Link>
              </li>
            </ul>
          ))}
        </>
      ) : (
        <div>로딩중</div>
      )}
    </>
  );
}
