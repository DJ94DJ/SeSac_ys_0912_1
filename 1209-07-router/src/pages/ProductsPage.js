import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Productpage() {
  const [product, setProduct] = useState();
  const getProducts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const products = await res.json();
    setProduct(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div>여기는 상품 페이지</div>
      {product ? (
        <>
          {product.map((value) => (
            <ul key={value.id}>
              <li>번호{value.id}</li>
              <li>상품명 {value.title}</li>
              <li>상품 설명 {value.body}</li>
              <li>
                {/*· /product/1, /product/2...3 */}

                {/* /슬래쉬를 적어서 이을 수 있다. */}
                <Link to={`/products/${value.id}`}>상세페이지로 이동 </Link>
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
